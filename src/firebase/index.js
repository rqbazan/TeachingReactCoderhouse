import { getFirestore } from './connector'

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
