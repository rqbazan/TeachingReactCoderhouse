export function ItemDetail({ product }) {
  return (
    <pre className="mt-24 p-10 bg-red-100 text-xl break-all whitespace-pre-wrap">
      {JSON.stringify(product, null, 2)}
    </pre>
  )
}
