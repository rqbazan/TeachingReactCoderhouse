import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Spinner } from './Spinner'
import { getAllProducts, getProductsByCategoryId } from '../firebase'

function getProducts(query) {
  const categoryId = query?.categoryId

  if (categoryId) {
    return getProductsByCategoryId(categoryId)
  } else {
    return getAllProducts()
  }
}

export function ItemListContainer({ query }) {
  const [isLoading, setIsLoading] = useState(true)

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fn() {
      setIsLoading(true)

      try {
        const products = await getProducts(query)
        setProducts(products)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fn()
  }, [query])

  return isLoading ? <Spinner centered /> : <ItemList products={products} />
}
