import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (url, thunkAPI) => {
        try {
            let res = await fetch(url)
            if(res.ok) {
                let data = await res.json()
                return data
            } else {
                return thunkAPI.rejectWithValue()
            }
        } catch (error) {
            return thunkAPI.rejectWithValue()
        }
    }
)


const initialState = {
    stock: []
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
        return {
            ...state,
            stock: action.payload
        }
    }

  }
});



export default bookSlice.reducer