import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartArray: [],
    quantity: 0,
    // total: 1
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state, action) => {
            console.log(state, "State")
            console.log("add cart item action payload:", action.payload);
            console.log("add Cart Item state.cartArray:", state.cartArray);
            
            const newCartItem = {
                id : state.cartArray.length + 1,
                ...action.payload
            };
            state.quantity += 1;
            return state.cartArray.push(newCartItem);

            // console.log(state.cartArray, "After add cart Item");

            // return [...state.cartArray, newCartItem]
        },
        removeFromCart : (state, action) => {
            // ...state
            let index = state.cartArray.indexOf(action.payload);
            state.quantity -= 1;
            state.cartArray.splice(index, 1)
        },
        getCartQuantity : (state) => {
            return state.quantity;
        },
        increaseCartQuantity : (state, action) => {
            console.log("increase Cart item action payload:",action.payload);
            console.log("increase Cart Item state.cartArray:", state.cartArray);
            if (state.cartArray.find(item => item.id === action.payload) == null){
                return [ ...state.cartArray, {action , quantity: 1}]
            } else {
                return state.cartArray.map(item => {
                    if( item.id === action.payload){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        }
    }
});


export const cartReducer = cartSlice.reducer;

export const { addCartItem } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const { increaseCartQuantity} = cartSlice.actions;


export const selectAllCartItems = (state) => {
    // console.log(state)
    return state.cart.cartArray;
}

// export const increaseCartQuantity = (id) => {
//     if(cartItems.find(item => item.id === id) == null){
//         return [...cartItems, {id, quantity: 1}]
//     } else {
//         return cartItems.map(item => {
//             if (item.id === id){
//                 return { ...item, quantity: item.quantity + 1}
//             } else {
//                 return item
//             }
//         })
//     }

// export const selectCartItemById = (id) => (state) => {
//     return state.cart.cartArray.find((item) => item.id)
// }