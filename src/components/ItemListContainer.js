import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Spinner } from './Spinner'

import mockedProducts from '../mock/products.json'

async function getProducts(query) {
  const productsPromise = new Promise((resolve) => {
    setTimeout(() => {
      let resolvedProduct = mockedProducts

      if (query?.categoryId) {
        resolvedProduct = mockedProducts.filter(
          (product) => product.categoryId === query.categoryId
        )
      }

      resolve(resolvedProduct)
    }, 2000)
  })

  const products = await productsPromise

  return products
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
