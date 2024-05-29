import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState: {
      currentname: "",
      previousname: "",
    },
    reducers: {
      pageName: (state, action)=> {
            state.currentname = state.previousname
            state.previousname = action.payload
      },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { pageName } = breadcrumbSlice.actions
  
  export default breadcrumbSlice.reducer