import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

import mockedProducts from '../mock/products.json'

async function getProduct(id) {
  const productPromise = new Promise((resolve) => {
    setTimeout(() => {
      const product = mockedProducts.find((item) => item.id === id)
      resolve(product)
    }, 2000)
  })

  const product = await productPromise

  return product
}

export function ItemDetailContainer() {
  const [product, setProduct] = useState()

  useEffect(() => {
    getProduct(1).then((product) => {
      setProduct(product)
    })
  }, [])

  return product ? <ItemDetail product={product} /> : null
}
