import { NavBar, ItemListContainer, ItemDetailContainer } from './components'

export default function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex mt-28">
        <ItemListContainer />
      </div>
      <ItemDetailContainer productId="115" />
    </div>
  )
}
