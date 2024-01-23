import { useAppDispatch } from "./store"
import { Order, deleteOrderByID, addNewOrder, changeStatusOrder } from "../store/orders/slice"
import { Status } from '../store/orders/slice'

export const useOrdersActions = () => {
  const dispatch = useAppDispatch()
  
  const addOrder = (order: Order) => {
    dispatch(addNewOrder(order))
  }

  const changeStatus = (order: {id: string, status: Status}) => {
    dispatch(changeStatusOrder(order))
  }

  const removeOrder = (id: string) => {
    dispatch(deleteOrderByID(id))
  }

  return { addOrder, removeOrder, changeStatus}
}