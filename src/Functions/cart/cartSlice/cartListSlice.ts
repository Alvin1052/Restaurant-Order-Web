import type { CartItemByRestoType } from '@/types/restaurantTypes';
import { createSlice } from '@reduxjs/toolkit';

interface CartListState {
  cartList: CartItemByRestoType[];
  selectedResto: CartItemByRestoType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CartListState = {
  cartList: [],
  selectedResto: null,
  isLoading: false,
  error: null,
};

const CartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        !state.cartList
          .find((cartItem) => cartItem.menus)
          ?.menus.find((menu) => menu.quantity)?.quantity
      ) {
        state.cartList.push(action.payload);
        return;
      }

      state.cartList.push(action.payload);
    },
  },
});

export default CartListSlice.reducer;
