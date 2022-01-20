import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../components'

export function CategoryPage() {
  const { categoryId } = useParams()

  return <ItemListContainer query={{ categoryId }} />
}
