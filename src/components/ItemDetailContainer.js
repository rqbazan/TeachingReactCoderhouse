import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { Spinner } from './Spinner'
import { getProductById } from '../firebase'

export function ItemDetailContainer({ productId }) {
  const [isLoading, setIsLoading] = useState(true)

  const [product, setProduct] = useState()

  useEffect(() => {
    async function fn() {
      setIsLoading(true)

      try {
        const product = await getProductById(productId)
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
