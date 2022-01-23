import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CartWidget } from './CartWidget'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'unisex', name: 'Unisex' },
  { id: 'jacket', name: 'Jacket' },
  { id: 't-shirt', name: 'T-Shirt' },
]

export function NavBar() {
  const cart = useCart()

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <header className="flex h-24 bg-gray-900 fixed top-0 w-full z-10">
      <div className="flex container mx-auto items-center px-6 md:px-0 justify-between md:justify-start">
        <div
          className="text-white ml-4 md:hidden"
          role="button"
          onClick={() => setIsMenuVisible(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <Link to="/">
          <h3 className="hidden lg:inline-block font-mono text-white text-3xl">
            UndefinedShop
          </h3>
          <h3 className="inline-block lg:hidden font-mono text-white text-3xl">
            U/S
          </h3>
        </Link>
        <nav className="space-x-6 ml-auto hidden md:flex">
          {categories.map((category) => {
            return (
              <NavLink
                key={category.name}
                exact
                activeClassName="font-bold bg-white text-gray-900"
                className="text-white text-xl uppercase py-1 px-2"
                to={category.id === 'all' ? '/' : `/c/${category.id}`}
              >
                {category.name}
              </NavLink>
            )
          })}
        </nav>
        <div className="flex h-16 md:ml-8">
          <Link to="/cart">
            <CartWidget numOfItems={cart.length} />
          </Link>
        </div>
      </div>
      {isMenuVisible && (
        <aside className="fixed bg-gray-100 h-screen w-full p-8 flex items-center justify-center">
          <div
            className="absolute top-10 right-10"
            role="button"
            onClick={() => setIsMenuVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <nav className="space-y-10 flex flex-col items-center">
            {categories.map((category) => {
              return (
                <NavLink
                  key={category.name}
                  onClick={() => setIsMenuVisible(false)}
                  exact
                  activeClassName="font-bold bg-gray-900 text-white"
                  className="text-3xl uppercase py-1 px-2"
                  to={category.id === 'all' ? '/' : `/c/${category.id}`}
                >
                  {category.name}
                </NavLink>
              )
            })}
          </nav>
        </aside>
      )}
    </header>
  )
}
