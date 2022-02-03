import { getFirestore, firestore } from './connector'

function documentToProduct(document) {
  return {
    id: document.id,
    ...document.data(),
  }
}

export async function getAllProducts() {
  const db = getFirestore()

  const snapshot = await db.collection('products').get()

  const products = snapshot.docs.map(documentToProduct)

  return products
}

export async function getProductById(productId) {
  const db = getFirestore()

  const doc = await db.collection('products').doc(productId).get()

  if (!doc.exists) {
    return null
  }

  return documentToProduct(doc)
}

export async function getProductsByCategoryId(categoryId) {
  const db = getFirestore()

  const snapshot = await db
    .collection('products')
    .where('categoryId', '==', categoryId)
    .get()

  const products = snapshot.docs.map(documentToProduct)

  return products
}

export async function createOrder(order) {
  const db = getFirestore()

  const cartItemsIds = order.items.map((item) => item.id)

  const snapshot = await db
    .collection('products')
    .where(firestore.FieldPath.documentId(), 'in', cartItemsIds)
    .get()

  const batch = db.batch()

  const productsOutOfStock = []

  snapshot.docs.forEach((document, index) => {
    const stock = document.data().stock
    const quantity = order.items[index].quantity

    if (stock >= quantity) {
      batch.update(document.ref, { stock: stock - quantity })
    } else {
      const product = documentToProduct(document)
      productsOutOfStock.push(product)
    }
  })

  if (productsOutOfStock.length !== 0) {
    console.log({ productsOutOfStock })
    throw Error('No hay stock suficiente')
  }

  await batch.commit()

  const data = {
    buyer: order.buyer,
    items: order.items,
    createdAt: firestore.Timestamp.fromDate(new Date()),
    total: order.total,
  }

  const document = await db.collection('orders').add(data)

  return document.id
}
