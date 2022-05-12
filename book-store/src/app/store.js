import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'
import bookReducer from '../slices/book/bookSlice'

export default configureStore ({
    reducer: {
        cart: cartReducer,
        book: bookReducer
    }
})