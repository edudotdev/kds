import { useAppDispatch } from "./store"
import { Order, deleteUserByID, addNewOrder, changeToCompleted, changeToCanceled } from "../store/orders/slice"

export const useOrdersActions = () => {
  const dispatch = useAppDispatch()
  
  const addOrder = (order: Order) => {
    dispatch(addNewOrder(order))
  }

  const changeCompleted = (id: string) => {
    dispatch(changeToCompleted(id))
  }

  const changeCanceled = (id: string) => {
    dispatch(changeToCanceled(id))
  }

  const removeOrder = (id: string) => {
    dispatch(deleteUserByID(id))
  }

  return { addOrder, removeOrder, changeCompleted, changeCanceled }
}