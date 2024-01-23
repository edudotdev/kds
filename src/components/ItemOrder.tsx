import { Product } from '../store/orders/slice'

interface Props {
  product: Product
}

export const ItemOrder = ({
  product
}:Props) => {
  return (
    <div className='flex justify-between gap-3 text-slate-800'>
      <p className='text-xl font-semibold capitalize'>{product.name}</p>
      <span className='text-lg font-bold'>x {product.quantity}</span>
    </div>
  )
}
