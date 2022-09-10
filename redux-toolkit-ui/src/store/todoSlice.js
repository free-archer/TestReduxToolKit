import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: 
        [
            {
            id: '1',
            text: 'new text',
            completed: false
            }
        ],
    reducers: {
        setAddText: (store, action) => {
             store.push(action.payload)
         },
         setTextCompleted: function(state, action) {
            let curText = state.find((todo) => (todo.id === action.payload))
            curText.completed = !curText.completed
         },
         deleteText: function(store, action) {
            store = store.filter((todo) => (todo.id !== action.payload))
        }
     }
 })

export const { setAddText,  setTextCompleted, deleteText} = todoSlice.actions
export default todoSlice.reducer