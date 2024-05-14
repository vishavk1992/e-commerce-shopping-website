import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/CartSlice'
import wishlistReducer from './features/WishlistSlice'

const rootReducer = combineReducers({
    cart : cartReducer,
    reducer2 : wishlistReducer,

})
export const Store= configureStore({
    reducer: rootReducer

})