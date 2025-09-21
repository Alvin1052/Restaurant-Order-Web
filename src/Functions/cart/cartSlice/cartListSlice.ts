import type {
  CartItemByRestoType,
  InputCartItemType,
  RemoveCartItemType,
} from '@/types/restaurantTypes';
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
    addToCart: (
      state: CartListState,
      action: { payload: InputCartItemType }
    ) => {
      const { menu, restaurantId } = action.payload;
      const quantity = menu.quantity;

      const cart = state.cartList.find(
        (item) => item.restaurantId === restaurantId
      );

      if (!cart) {
        state.cartList.push({
          restaurantId,
          menus: [{ ...menu, quantity: quantity, total: menu.menu.price }],
          subtotal: menu.menu.price * quantity,
        });

        console.log('payload resto kosong', action.payload);

        return;
      }

      //apakah menu ada ?
      const menuExist = cart.menus.find((item) => item.id === menu.id);

      if (menuExist) {
        menuExist.quantity += quantity;
        menuExist.total += menuExist.menu.price * quantity;

        // menghapus List jika quantity sama dengan atau dibawah 0
        if (menuExist?.quantity <= 0) {
          cart.menus = cart.menus.filter((item) => item.id !== menu.id);
        }
      } else {
        cart.menus.push({
          id: menu.id,
          menu: menu.menu,
          quantity: quantity,
          total: menu.menu.price * quantity,
        });
      }

      cart.subtotal = cart.menus.reduce((total, item) => total + item.total, 0);

      console.log('payload resto ada', action.payload);

      return;
    },

    removeMenuFromCart: (
      state: CartListState,
      action: { payload: RemoveCartItemType }
    ) => {
      const { RestoId, MenuId } = action.payload;

      const cartbyResto = state.cartList.filter(
        (item) => item.restaurantId === RestoId
      );

      cartbyResto.forEach((item) => {
        item.menus = item.menus.filter((menu) => menu.id !== MenuId);
        if (item.menus.length === 0) {
          state.cartList = state.cartList.filter(
            (item) => item.restaurantId !== RestoId
          );
        }
      });
    },
  },
});
export const { addToCart, removeMenuFromCart } = CartListSlice.actions;
export default CartListSlice.reducer;
