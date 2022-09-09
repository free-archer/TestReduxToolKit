import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
     firstName: 'Peter',
     lastName: 'Ivan'
    },
    reducers: {
         setFirstName: (store, action) => {
             store.firstName = action.payload
         },
         setLastName: function(store, action) {
             store.lastName = action.payload
         }
     }
 })

  export const { setFirstName, setLastName } = userSlice.actions
  export default userSlice.reducer