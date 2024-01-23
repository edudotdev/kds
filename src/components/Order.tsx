import { Order as OrderType } from '../store/orders/slice'
import { useOrdersActions } from '../hooks/useOrdersActions'
import { ItemOrder } from './'
import { clsx } from 'clsx'
import { CheckCircle, Clock, CookingPot, Trash } from 'phosphor-react'

interface props {
  order: OrderType
}

export const Order = ({
  order
}:props) => {
  const { changeStatus, removeOrder } = useOrdersActions()

  const { status } = order

  const styleStatus = clsx(
    {'bg-green-100 border-green-200 text-green-500': status === 'cooking'}, 
    {'bg-slate-100 border-slate-200 text-slate-500': status === 'queue'},
    {'bg-blue-100 border-blue-200 text-blue-500': status === 'completed'},
    {'bg-red-100 border-red-200 text-red-500': status === 'canceled'}
  )

  return (
    <div className='overflow-hidden group border relative bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl'>
      <header className='flex justify-between border-slate-200 group-hover:border-slate-300 p-3 transition-colors'>
        <p className={`${styleStatus} capitalize font-bold text-sm border px-3 py-0.5 rounded-full grid place-items-center`}>{order.status}</p>
        <span className='text-lg flex items-center gap-2 text-slate-600'><Clock size={24} /> {order.date}</span>
      </header>
      <div className='border-b-2 mx-2 border-dotted'></div>
      <div className='flex flex-col justify-between h-56 max-h-56 relative overflow-y-auto'>
        <div className='p-3' key={order.id}>          
          <ul className='flex flex-col gap-3'>
            {order.products.map((product, index) => (
              <ItemOrder 
                key={index}
                product={product}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className='border-b-2 mx-2 border-dotted'></div>
      <div className='flex gap-2 p-2'>
        {
          status === 'queue' &&
          <button onClick={() => changeStatus({id: order.id, status: 'cooking'})} className='bg-zinc-700 hover:bg-black transition-colors text-white p-2 w-full rounded-md text-sm font-semibold flex items-center gap-2 justify-center'><CookingPot size={24} /> Cooking</button>
        }
        {
          status === 'cooking' &&
          <button onClick={() => changeStatus({id: order.id, status: 'completed'})} className='bg-zinc-700 hover:bg-black transition-colors text-white p-2 w-full rounded-md text-sm font-semibold flex items-center gap-2 justify-center'><CheckCircle size={24} /> Completed</button>
        }
        {
          status !== 'canceled' && status !== 'completed' &&
          <button onClick={() => changeStatus({id: order.id, status: 'canceled'})} className='min-w-24 border  border-slate-200 font-bold rounded-md text-slate-800 p-2 hover:border-red-100 text-sm hover:bg-red-100 hover:text-red-600 transition-colors px-2'>Cancel</button>
        }

        {
          status === 'canceled' &&
          <button onClick={() => removeOrder(order.id)} className='border border-slate-200 font-bold rounded-md text-slate-800 p-2 hover:border-red-100 text-sm hover:bg-red-100 hover:text-red-600 transition-colors px-2 flex items-center gap-2 justify-center w-full'><Trash size={24} weight="bold" /> Delete</button>
        }
      </div>
    </div>
  )
}