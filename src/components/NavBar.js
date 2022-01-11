import { CartWidget } from './CartWidget'

export function NavBar() {
  return (
    <header className="flex h-24 bg-gray-900 fixed top-0 w-full z-10">
      <div className="flex container mx-auto items-center px-6 md:px-0">
        <h3 className="font-mono text-white text-3xl">UndefinedShop</h3>
        <div className="flex h-16 ml-auto">
          <CartWidget numOfItems={4} />
        </div>
      </div>
    </header>
  )
}
