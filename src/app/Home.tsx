import { Order } from '../components'
import { useAppSelector } from '../hooks/store'

export const Home = () => {
  const orders = useAppSelector(state => state.orders)

  return (
    <div className='grid grid-cols-4 gap-5 m-10'>
      {orders.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
    </div>
  )
}
