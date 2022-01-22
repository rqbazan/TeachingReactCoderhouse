import { ItemCount } from './ItemCount'
import { useCart } from '../hooks/useCart'

export function ItemDetail({ product }) {
  const cart = useCart()

  const cartItem = cart.getItem(product.id)

  function onAddToCart(quantity) {
    cart.addItem({ ...product, quantity })
  }

  return (
    <div className="flex">
      <div className="relative w-1/2 bg-gray-100">
        <div className="absolute flex flex-col items-start z-10">
          <div className="text-3xl font-bold p-2 bg-gray-900 text-white">
            {product.title}
          </div>
          <div className="text-xl font-bold p-2 bg-gray-900 text-white">
            {product.price.value} {product.price.currencyCode}
          </div>
        </div>
        <img
          className="h-full mx-auto object-contain"
          src={product.pictureUrl}
          alt={product.title}
        />
      </div>
      <div className="w-1/2 px-10 pt-5 flex flex-col">
        <div className="text-4xl font-bold mb-4">{product.title}</div>
        <div
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <div className="flex justify-end mt-auto">
          <div className="w-[60%]">
            <ItemCount
              initialValue={cartItem?.quantity}
              maxValue={product.stock}
              onAdd={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
