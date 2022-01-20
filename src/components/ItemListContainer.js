import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'

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
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(query).then((products) => {
      setProducts(products)
    })
  }, [query])

  return <ItemList products={products} />
}
