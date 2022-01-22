export function Item({ product }) {
  return (
    <div className="relative h-80 bg-gray-100 z-[1] overflow-hidden">
      <div className="absolute flex flex-col items-start z-10">
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.title}
        </div>
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.price.value} {product.price.currencyCode}
        </div>
      </div>
      <div className="absolute inset-0 transform transition hover:scale-125 ease-in-out">
        <img
          src={product.pictureUrl}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 items-start">
        <div className="text-md font-bold p-2 bg-white">
          In Stock: {product.stock}
        </div>
      </div>
    </div>
  )
}
