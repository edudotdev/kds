import { Order } from '../components'
import { EmptyState, GridOrders } from '../components/ui'
import { useAppSelector } from '../hooks/store'
import { Receipt } from 'phosphor-react'


export const Canceled = () => {
  const orders = useAppSelector(state => state.orders)
  const canceledOrders = orders.filter((order) => order.status === 'canceled') || [];

  return canceledOrders.length === 0 ? 
    <EmptyState text='No canceled orders'>
      <Receipt size={150} weight="bold" />
    </EmptyState> 
    : (
    <GridOrders>
      <>
        {canceledOrders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </>
    </GridOrders>
  )
}
