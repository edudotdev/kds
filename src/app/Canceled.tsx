import { Order } from '../components'
import { useAppSelector } from '../hooks/store'

export const Canceled = () => {
  const orders = useAppSelector(state => state.orders)
  const completedOrders = orders.filter((order) => order.status === 'canceled');

  return (
    <div className='grid grid-cols-4 gap-5 m-10'>
      {completedOrders.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
  </div>
  )
}
