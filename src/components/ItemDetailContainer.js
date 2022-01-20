import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

import mockedProducts from '../mock/products.json'

async function getProduct(productId) {
  const productPromise = new Promise((resolve) => {
    setTimeout(() => {
      const product = mockedProducts.find((product) => product.id === productId)
      resolve(product)
    }, 2000)
  })

  const product = await productPromise

  return product
}

export function ItemDetailContainer({ productId }) {
  const [product, setProduct] = useState()

  useEffect(() => {
    getProduct(productId).then((product) => {
      setProduct(product)
    })
  }, [productId])

  return product ? <ItemDetail product={product} /> : null
}
