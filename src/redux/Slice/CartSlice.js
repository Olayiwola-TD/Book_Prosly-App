import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductToCart(state, action) {

            let myindex = -1;

            state.map((item, index) => {

                if (item._id == action.payload._id) {
                    myindex = index
                }

            });

            if (myindex == -1) {

                let IMAGE_SOURCE
                if (action.payload.productImages.length == 0) {
                    IMAGE_SOURCE = action.payload.product.imageUrl
                }
                if (action.payload.productImages.length > 0) {
                    IMAGE_SOURCE = action.payload.productImages[0].path
                }
                state.push({
                    _id: action.payload._id,
                    discount: action.payload.discount == undefined ? 0 : action.payload.discount,
                    categoryId: action.payload.categoryId,
                    sellerId: action.payload.userId,
                    sellerProductId: action.payload._id,
                    description: action.payload.description,
                    imageUrl: IMAGE_SOURCE,
                    name: action.payload.product ? action.payload.product.name : action.payload.notes,
                    price: action.payload.price,
                    qty: action.payload.qty == undefined ? 1 : action.payload.qty,
                    product_quantity: action.payload.quantity,
                    remainingQuantity: action.payload.remainingQuantity,
                    minOrderQuantity: action.payload.minOrderQuantity,
                    maxOrderQuantity: action.payload.maxOrderQuantity
                });
            } else {
                state[myindex].qty = state[myindex].qty + 1;
            }


        },
        removeProductToCart(state, action) {

            let myindex = -1;

            state.map((item, index) => {

                if (item._id == action.payload._id) {
                    myindex = index
                }

            });

            if (myindex == -1) {

            } else {
                state[myindex].qty = state[myindex].qty - 1;
            }
        },
        deleteCartItem(state, action) {
            state.splice(state.findIndex((arrow) => arrow._id === action.payload), 1);
        },
        emptyCart(state, action) {
            state.splice(state.length - state.length, state.length)
        }
    }
})

export const { addProductToCart, removeProductToCart, deleteCartItem, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;