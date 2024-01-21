import { configureStore, type Middleware } from "@reduxjs/toolkit";
import ordersReducer from './orders/slice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch