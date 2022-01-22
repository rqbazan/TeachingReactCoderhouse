import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CartWidget } from './CartWidget'

const categories = [
  { id: 'unisex', name: 'Unisex' },
  { id: 'jacket', name: 'Jacket' },
  { id: 't-shirt', name: 'T-Shirt' },
]

export function NavBar() {
  const cart = useCart()

  return (
    <header className="flex h-24 bg-gray-900 fixed top-0 w-full z-10">
      <div className="flex container mx-auto items-center px-6 md:px-0">
        <Link to="/">
          <h3 className="hidden md:inline-block font-mono text-white text-3xl">
            UndefinedShop
          </h3>
          <h3 className="inline-block md:hidden font-mono text-white text-3xl">
            U/S
          </h3>
        </Link>
        <nav className="space-x-10 ml-auto hidden md:flex">
          {categories.map((category) => {
            return (
              <Link
                key={category.name}
                className="text-white text-xl font-bold uppercase transform hover:scale-110 transition-all"
                to={`/c/${category.id}`}
              >
                {category.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex h-16 ml-auto md:ml-8">
          <Link to="/cart">
            <CartWidget numOfItems={cart.length} />
          </Link>
        </div>
      </div>
    </header>
  )
}
