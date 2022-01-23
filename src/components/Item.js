import { classNames } from '../utils/classNames'

export function ItemImage({ product }) {
  return (
    <div className="absolute inset-0 transform transition hover:scale-125 ease-in-out">
      <img
        src={product.pictureUrl}
        alt={product.title}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function Item({ product, className }) {
  return (
    <div
      className={classNames(
        className,
        'relative bg-gray-100 z-[1] overflow-hidden'
      )}
    >
      <div className="absolute flex flex-col items-start z-10">
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.title}
        </div>
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.price.value} {product.price.currencyCode}
        </div>
      </div>
      <ItemImage product={product} />
      <div className="absolute bottom-0 right-0 items-start">
        <div className="text-md font-bold p-2 bg-white">
          In Stock: {product.stock}
        </div>
      </div>
    </div>
  )
}
