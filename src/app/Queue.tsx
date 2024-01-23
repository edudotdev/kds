import { ListBullets } from 'phosphor-react';
import { Order } from '../components'
import { EmptyState, GridOrders } from '../components/ui';
import { useAppSelector } from '../hooks/store'

export const Queue = () => {
  const orders = useAppSelector(state => state.orders)
  const queueOrders = orders.filter((order) => order.status === 'queue') || [];

  return queueOrders.length === 0 ?
  <EmptyState text='No queue orders'>
    <ListBullets size={150} weight="bold" />
  </EmptyState>
  : (
    <GridOrders>
      <>
        {queueOrders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </>
    </GridOrders>
  )
}