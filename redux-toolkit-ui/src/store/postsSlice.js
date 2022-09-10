import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = 
    {
    posts: [ 
        {id: '1',
        title: 'Title'}
    ]
}

export const getPostAsync = createAsyncThunk(
    'posts',
    async (_, { rejectWithValue, dispatch } ) => {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')

        dispatch(setPosts(res.data))

    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (store, action) => {
             store.posts = action.payload
         },

     },
    //  extraReducers: {
    //     [getPostAsync.fulfilled]: () => {console.log("fulfilled")},
    //     [getPostAsync.pending]: () => {console.log("pending")},
    //     [getPostAsync.rejected]: () => {console.log("rejected")},
    //  }
 })

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer