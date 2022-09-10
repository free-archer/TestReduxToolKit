import { createSlice } from '@reduxjs/toolkit'

const initialState = 
    {
    todos: [
        {
        id: '1',
        text: 'new text',
        completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setAddText: (store, action) => {
             store.todos.push(action.payload)
         },
         setTextCompleted: function(state, action) {
            let curText = state.todos.find((todo) => (todo.id === action.payload))
            curText.completed = !curText.completed
         },
         deleteText: function(store, action) {
            store.todos = store.todos.filter((todo) => (todo.id !== action.payload))
        }
     }
 })

export const { setAddText,  setTextCompleted, deleteText} = todoSlice.actions
export default todoSlice.reducer