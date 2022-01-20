export function ItemDetail({ product }) {
  return (
    <div className="flex h-[500px]">
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
      <div className="w-1/2 p-10">
        <div className="text-4xl font-bold mb-4">{product.title}</div>
        <div
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  )
}
