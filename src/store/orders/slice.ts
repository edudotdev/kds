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

type Status = 'active' | 'completed' | 'canceled'

export const formateHour = ( date:Date ) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const defaultState: Order[] = [
  {
    id: crypto.randomUUID(),
    products: [
      {
        name: 'Hamberger',
        quantity: 1
      },
      {
        name: 'papas',
        quantity: 1
      },
    ],
    status: 'active',
    date: formateHour(new Date())
  },
  {
    id: crypto.randomUUID(),
    products: [
      {
        name: 'Pizza',
        quantity: 1
      },
      {
        name: 'Soda',
        quantity: 2
      },
    ],
    status: 'completed',
    date: formateHour(new Date())
  }
]

const initialState: Order[] = (() => {
  const localData = localStorage.getItem('__redux__state__')
  return localData ? JSON.parse(localData).orders : defaultState 
})()

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<Order>) => {
      return [...state, {...action.payload}]
    },
    changeToCompleted:(state, action: PayloadAction<string>) => {
      const id = action.payload
      const updatedOrders = state.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            status: 'completed',
          }
        }

        return order;
      });

      return updatedOrders as any;
    },
    changeToCanceled:(state, action: PayloadAction<string>) => {
      const id = action.payload
      const updatedOrders = state.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            status: 'canceled',
          }
        }

        return order;
      });

      return updatedOrders as any;
    },
    deleteUserByID: (state, action: PayloadAction<string>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    },
    
  }
})


export default ordersSlice.reducer

export const { addNewOrder, deleteUserByID, changeToCompleted, changeToCanceled } = ordersSlice.actions