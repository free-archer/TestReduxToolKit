import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { todoSlice } from './todoSlice'
import { postsSlice } from './postsSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todos: todoSlice.reducer,
        posts: postsSlice.reducer
    }
})

