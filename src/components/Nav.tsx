import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/store'

const paths = [
  {
    url: '/',
    text: 'All'
  },
  {
    url: '/active',
    text: 'Active'
  },
  {
    url: '/completed',
    text: 'Completed'
  },
  {
    url: '/canceled',
    text: 'Canceled'
  },
]

export const Nav = () => {
  const orders = useAppSelector(state => state.orders)
  const activeOrders = orders.filter((order) => order.status === 'active');
  const completedOrders = orders.filter((order) => order.status === 'completed');
  const canceledOrders = orders.filter((order) => order.status === 'canceled');


  return (
    <header className='sticky top-0 flex justify-between items-center border-b border-slate-200 px-10 h-20 bg-white z-50'>
      <h1 className='text-4xl font-bold'>KDS</h1>
      <nav className='flex gap-4'>
        {paths.map(path => (
          <Link  
            key={path.url}
            to={path.url}
            className='hover:bg-slate-100 rounded-lg text-lg font-semibold text-gray-800 px-3 py-2 text-center transition-colors' 
            >
              {path.text}
              
          </Link>
        ))}
      </nav>
    </header>
  )
}
