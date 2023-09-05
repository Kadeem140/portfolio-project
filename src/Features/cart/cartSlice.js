import { createSlice } from "@reduxjs/toolkit";
import { CART } from "./Cart";

const initialState = {
    cartArray: CART
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state, action) => {
            console.log("add cart item action payload:", action.payload);
            console.log("add Cart Item state.cartArray:", state.cartArray);
            const newCartItem = {
                id : state.cartArray.length + 1,
                ...action.payload
            };
            state.cartArray.push(newCartItem);
        }
    }
});

export const cartReducer = cartSlice.reducer;

export const { addCartItem } = cartSlice.actions;

export const selectAllCartItems = (state) => {
    // console.log(state)
    return state.cart.cartArray;
}

// export const selectCartItemById = (id) => (state) => {
//     return state.cart.cartArray.find((item) => item.id)
// }