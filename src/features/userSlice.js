import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

//create a useSlice with an object 
export const userSlice = createSlice({
    name: 'user',
    initialState : {
        user:null   //the initial state of a user is null 
    },

    
reducers: {
   login: (state,action) => {
       state.user = action.payload;
   },
   logout: (state) => {
       state.user = null;
   },
},

});

export const {login,logout} = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;
