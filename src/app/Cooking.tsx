import { CookingPot } from 'phosphor-react';
import { Order } from '../components'
import { EmptyState, GridOrders } from '../components/ui';
import { useAppSelector } from '../hooks/store'

export const Cooking = () => {
  const orders = useAppSelector(state => state.orders)
  const cookingOrders = orders.filter((order) => order.status === 'cooking') || [];

  return cookingOrders.length === 0 ?
  <EmptyState text='No cooking orders'>
    <CookingPot size={150} weight="bold" />
  </EmptyState>
  :(
    <GridOrders>
      <>
        {cookingOrders.map(order => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </>
    </GridOrders>
  )
}