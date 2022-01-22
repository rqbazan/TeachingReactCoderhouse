import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

import mockedProducts from '../mock/products.json'
import { Spinner } from './Spinner'

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
  const [isLoading, setIsLoading] = useState(true)

  const [product, setProduct] = useState()

  useEffect(() => {
    async function fn() {
      setIsLoading(true)

      try {
        const product = await getProduct(productId)
        setProduct(product)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fn()
  }, [productId])

  return isLoading ? <Spinner centered /> : <ItemDetail product={product} />
}
