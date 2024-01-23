import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Order {
  id: string
  products: Product[]
  status: Status,
  date: string,
}

export interface Product {
  name: string
  quantity: number
}

export type Status = 'cooking' | 'completed' | 'canceled' | 'queue'

export const formateHour = ( date:Date ) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const initialState: Order[] = (() => {
  const localData = localStorage.getItem('__redux__state__')
  return localData ? JSON.parse(localData).orders : [] 
})()

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<Order>) => {
      return [...state, {...action.payload}]
    },
    changeStatusOrder:(state, action: PayloadAction<{id: string, status: Status}>) => {
      const {id, status} = action.payload
      const updatedOrders = state.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            status: status,
          }
        }

        return order;
      });

      return updatedOrders as any;
    },
    deleteOrderByID: (state, action: PayloadAction<string>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    },
  }
})


export default ordersSlice.reducer

export const { addNewOrder, deleteOrderByID, changeStatusOrder } = ordersSlice.actions