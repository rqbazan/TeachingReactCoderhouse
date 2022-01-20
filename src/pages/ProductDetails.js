import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../components'

export function ProductDetailsPage() {
  const { productId } = useParams()

  return <ItemDetailContainer productId={productId} />
}
