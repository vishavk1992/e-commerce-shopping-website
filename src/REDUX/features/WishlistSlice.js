import { createSlice } from "@reduxjs/toolkit";


const wishlistState = {
    wishlist : [],
    wishlistTotalQuantity : 0,
}

const WishlistSlice = createSlice({
    name : 'wishlist',
    initialState: wishlistState,

    reducers : {
        addToWishlist : (state, action)=>{
            const itemIndex = state.wishlist.findIndex((item)=> item.id === action.payload.id)

            if(itemIndex >= 0){
                state.wishlist[itemIndex].wishlistQuantity += 1
            }
            else{
                const tempproduct = {...action.payload , wishlistQuantity:1 }   
                state.wishlist.push(tempproduct)
            }
        },   
        removeFromWishlist : (state,action)=>{
            const nextItem = (state.wishlist.filter(item=>item.id !== action.payload.id )) 
            state.wishlist = nextItem;
        },

      
        clearWishlist : (state, action)=>{
            state.wishlist = []
        }
    }

})
export const {addToWishlist , removeFromWishlist , clearWishlist} = WishlistSlice.actions
export default WishlistSlice.reducer
