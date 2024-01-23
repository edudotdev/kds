import { ListChecks } from 'phosphor-react';
import { Order } from '../components'
import { EmptyState, GridOrders } from '../components/ui';
import { useAppSelector } from '../hooks/store'

export const Completed = () => {
  const orders = useAppSelector(state => state.orders)
  const completedOrders = orders.filter((order) => order.status === 'completed') || [];

  return completedOrders.length === 0 ? 
  <EmptyState text='No completed orders'>
    <ListChecks size={150} weight="bold" />
  </EmptyState> 
  : (
    <GridOrders>
      <>
        {completedOrders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </>
    </GridOrders>
  )
}
