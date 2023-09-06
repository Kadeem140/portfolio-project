import { createSlice } from "@reduxjs/toolkit";
import { CART } from "./Cart";

const initialState = {
    cartArray: CART,
    quantity: 1,
    // total: 1
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state, action) => {
            console.log("add cart item action payload:", action.payload);
            console.log("add Cart Item state.cartArray:", state.cartArray);
            state.quantity += 1;
            const newCartItem = {
                id : state.cartArray.length + 1,
                ...action.payload
            };
            state.cartArray.push(newCartItem);
        },
        removeFromCart : (state, action) => {
            // ...state
            let index = state.cartArray.indexOf(action.payload);
            state.quantity -= 1;
            state.cartArray.splice(index, 1)
        }
    }
});

export const cartReducer = cartSlice.reducer;

export const { addCartItem } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;


export const selectAllCartItems = (state) => {
    // console.log(state)
    return state.cart.cartArray;
}

// export const selectCartItemById = (id) => (state) => {
//     return state.cart.cartArray.find((item) => item.id)
// }