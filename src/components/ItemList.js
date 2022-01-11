import { Item } from './Item'

export function ItemList({ products }) {
  return (
    <div className="flex mx-auto mt-24">
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 grid-rows-3">
        {products.map((product) => {
          return <Item key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
