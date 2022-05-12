import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        return  {
            ...state,
            books: [...state.books, action.payload]
        }
    },
    removeFromCart: (state, action) => {
        return {
            ...state,
            books: state.books.filter((book, i) => i !== action.payload)
        }
    }

  }
});

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer