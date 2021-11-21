import produce from "immer";
import { CartItemModel } from "../../models/CartItemModel";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface cartState {
  cartItems: CartItemModel[];
  itemTotalCost: number;
  itemCount: number;
}
const initialState = { cartItems: [], itemCount: 0, itemTotalCost: 0 };

const reducer = produce(
  (state: cartState = initialState, action: Action): cartState => {
    switch (action.type) {
      case ActionType.ADD_CART_ITEM:
        const purchaseAmount=action.payload.amount;
        const purchaseItem = action.payload.dish;
        const existingItem = state.cartItems.find(
          (item) => item.id === purchaseItem.id
        );
        state.itemCount += purchaseAmount;
        state.itemTotalCost =
          state.itemTotalCost + purchaseItem.cost * purchaseAmount;
        if (existingItem) {
          existingItem.amount = existingItem.amount + purchaseAmount;
          existingItem.totalCost =
            existingItem.totalCost + purchaseItem.cost * purchaseAmount;
        } else {
          state.cartItems.push(purchaseItem);
        }
        return state;
      case ActionType.REMOVE_CART_ITEM:
        const id = action.payload.id;
        const removeAmount = action.payload.amount;
        const cartItem = state.cartItems.find((item) => item.id === id);
        if (cartItem) {
          if (cartItem.amount <= removeAmount) {
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
          } else {
            cartItem.amount = cartItem.amount - removeAmount;
            cartItem.totalCost =
              cartItem.totalCost - cartItem.cost * removeAmount;
          }
          state.itemCount -= removeAmount;
          state.itemTotalCost -= cartItem.cost * removeAmount;
        }
        return state;
      default:
        return state;
    }
  },
  initialState
);
export default reducer;
