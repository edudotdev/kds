import { CalendarCheck } from 'phosphor-react'
import { Order } from '../components'
import { EmptyState, GridOrders } from '../components/ui'
import { useAppSelector } from '../hooks/store'

export const Home = () => {
  const orders = useAppSelector(state => state.orders)

  return orders.length === 0 ? 
  <EmptyState text='No orders today'>
    <CalendarCheck size={150} weight="bold" />
  </EmptyState> 
  : (
    <GridOrders>
      <>
        {orders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </>
    </GridOrders>
  )
}