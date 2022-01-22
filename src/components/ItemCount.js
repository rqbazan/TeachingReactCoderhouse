import { useState } from 'react'
import { Button } from './Button'

export function ItemCount({ initialValue, minValue = 1, maxValue, onAdd }) {
  const [count, setCount] = useState(initialValue ?? minValue)

  function onIncrement(currentCount) {
    return Math.min(maxValue, currentCount + 1)
  }

  function onDecrement(currentCount) {
    return Math.max(minValue, currentCount - 1)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-gray-100">
        <Button
          onClick={() => setCount(onDecrement)}
          disabled={count === minValue}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
        <span className="mx-4 text-3xl font-semibold flex-1 text-center select-none">
          {count}
        </span>
        <Button
          onClick={() => setCount(onIncrement)}
          disabled={count === maxValue}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
      </div>
      <Button className="mt-2" onClick={() => onAdd(count)}>
        {initialValue ? 'Actualizar el Carrito' : 'Agregar al Carrito'}
      </Button>
    </div>
  )
}
