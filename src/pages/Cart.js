import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createOrder } from '../firebase'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'
import { ItemImage } from '../components/Item'
import { useCart } from '../hooks/useCart'

function CartItem({ cartItem, position, onDelete }) {
  return (
    <div className={`flex w-full ${position % 2 !== 0 ? 'bg-gray-100' : ''}`}>
      <Link to={`/p/${cartItem.id}`}>
        <div className="relative w-60 h-60 overflow-hidden">
          <ItemImage product={cartItem} />
        </div>
      </Link>
      <div className="flex flex-col p-6 w-full relative">
        <h2 className="font-semibold text-3xl">{cartItem.title}</h2>
        <div
          className="absolute right-0 top-0 p-4 bg-red-500 text-gray-100 hover:text-white"
          role="button"
          onClick={onDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <div className="text-xl font-semibold mt-1 text-indigo-600">
          {cartItem.price.value} {cartItem.price.currencyCode}
        </div>
        <div className="text-2xl font-semibold mt-auto ml-auto">
          <span className="text-indigo-600">
            {cartItem.price.value * cartItem.quantity}{' '}
            {cartItem.price.currencyCode}
          </span>{' '}
          x Qty {cartItem.quantity}
        </div>
      </div>
    </div>
  )
}

export function CartPage() {
  const form = useForm()

  const cart = useCart()

  const carritoTitleEl = (
    <h1 className="mb-6 text-4xl font-semibold">Carrito</h1>
  )

  async function onSubmit(formValues) {
    try {
      console.log({ formValues })

      const newOrderData = {
        buyer: formValues,
        items: cart.items,
        total: cart.total.toFixed(2),
      }

      const newOrderId = await createOrder(newOrderData)

      alert(`Gracias por tu compra. OrderID: ${newOrderId}`)

      form.reset()

      cart.clear()
    } catch (error) {
      alert(`Algo inesperado ha ocurrido.`)

      console.error(error)
    }
  }

  if (cart.isEmpty) {
    return (
      <Fragment>
        {carritoTitleEl}
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl">No hay productos en tu carrito</p>
          <Link to="/">
            <Button className="mt-8">Seguir comprado</Button>
          </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {carritoTitleEl}
      <div className="flex w-full">
        <div className="flex flex-col w-[60%] overflow-y-auto h-[720px]">
          {cart.items.map((cartItem, index) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                position={index}
                onDelete={() => cart.removeItem(cartItem.id)}
              />
            )
          })}
        </div>
        <div className="flex flex-col flex-1 ml-8">
          <section>
            <h2 className="mb-4 text-3xl font-semibold">Detalle del precio</h2>
            <div className="flex text-2xl">
              <span className="flex-1 font-semibold">Total</span>
              <span>{cart.total.toFixed(2)} USD</span>
            </div>
          </section>
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-semibold">Completar pedido</h2>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <TextField
                title="Nombre"
                inputProps={{
                  placeholder: 'Juan Perez',
                  required: true,
                  ...form.register('name'),
                }}
              />
              <TextField
                title="Correo"
                inputProps={{
                  placeholder: 'me@example.com',
                  required: true,
                  ...form.register('email'),
                }}
              />
              <TextField
                title="Telefono"
                inputProps={{
                  placeholder: '990000123',
                  required: true,
                  ...form.register('phone'),
                }}
              />
              <Button
                disabled={cart.length === 0}
                isLoading={form.formState.isSubmitting}
              >
                Finalizar compra
              </Button>
            </form>
          </section>
        </div>
      </div>
    </Fragment>
  )
}
