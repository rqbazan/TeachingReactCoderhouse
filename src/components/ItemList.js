import { Link } from 'react-router-dom'
import { Item } from './Item'

export function ItemList({ products }) {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/p/${product.id}`}>
            <Item product={product} className="h-80" />
          </Link>
        )
      })}
    </div>
  )
}
