import { Order as OrderType } from '../store/orders/slice'
import { useOrdersActions } from '../hooks/useOrdersActions'

interface props {
  order: OrderType
}

export const Order = ({
  order
}:props) => {
  const { changeCompleted, changeCanceled } = useOrdersActions()

  return (
    <div className='overflow-hidden group border relative overflow-y-auto border-slate-200 hover:border-slate-300 transition-colors rounded-lg'>
      <header className='flex justify-between border-b border-slate-200 group-hover:border-slate-300 p-3 transition-colors'>
        <p className={`${order.status === 'active' ? 'bg-green-600' : order.status === 'completed' ? 'bg-blue-600' : order.status === 'canceled' ? 'bg-red-500' : ''} text-white px-3 rounded-full grid place-items-center`}>{order.status}</p>
        <span className='text-lg'>Hour: {order.date}</span>
      </header>
      <div className='flex flex-col justify-between  h-64 max-h-64 relative'>
        <div className='p-3' key={order.id}>
          {/* <button onClick={() => removeOrder(order.id)}>
            Delete
          </button> */}
          
          <h3 className='text-xl font-bold pb-2'>Products</h3>
          <hr />
          <ul className='flex flex-col gap-2 text-lg'>
            {order.products.map(product => (
              <li key={product.name}>
                <span>{product.quantity}</span> {product.name}
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute bottom-0 flex gap-2 p-2'>
          <button onClick={() => changeCompleted(order.id)} className='bg-zinc-700 hover:bg-black transition-colors text-white p-2 w-full rounded-md'>Completed</button>
          <button onClick={() => changeCanceled(order.id)} className='w-24 border-2  border-slate-200 font-bold rounded-md text-slate-800 hover:border-red-100 hover:bg-red-100 hover:text-red-600 transition-colors px-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}