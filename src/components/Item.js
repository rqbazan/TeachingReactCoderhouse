export function Item({ product }) {
  return (
    <div className="relative w-80 h-80 bg-gray-100">
      <div className="absolute flex flex-col items-start">
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.title}
        </div>
        <div className="text-lg font-bold p-2 bg-gray-900 text-white">
          {product.price}
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src={product.pictureUrl}
          alt={product.title}
          className="h-full w-full"
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
