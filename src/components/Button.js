import { classNames } from '../utils/classNames'

export function Button({ className, disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      className={classNames(
        className,
        'flex items-center justify-center py-6 px-8 text-white text-2xl uppercase font-bold',
        disabled && 'bg-indigo-400 cursor-not-allowed',
        !disabled && 'bg-indigo-500 hover:bg-indigo-600'
      )}
      {...props}
    />
  )
}
