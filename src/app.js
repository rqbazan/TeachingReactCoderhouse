import { NavBar, ItemListContainer, ItemDetailContainer } from './components'

export default function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  )
}
