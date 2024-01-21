import { Order } from '../components'
import { useAppSelector } from '../hooks/store'

export const Active = () => {
  const orders = useAppSelector(state => state.orders)
  const activeOrders = orders.filter((order) => order.status === 'active');

  return (
    <div className='grid grid-cols-4 gap-5 m-10'>
      {activeOrders.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
  </div>
  )
}
