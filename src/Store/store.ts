import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Functions/cart/cartSlice/cartListSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
