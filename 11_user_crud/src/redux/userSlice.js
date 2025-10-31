// import { createSlice,createAsyncThunk} from"@reduxjs/toolkit"
// import axios from "axios";
// const BASE_URL= import.meta.env.VITE_API_BASE_URL

// export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
//     const response=await axios.get(`$(BASE_URL)/api/users/`)
//     return response.data
// })

// export const addUser=createAsyncThunk('users/addUser', async(user)=>{
//           const response= await axios.post(`${BASE_URL}/api/users/`,user)
//           return response.data
// })

// const userSlice = createSlice({
//     name:"users",
//     initialState:{
//         list:[],
//         loading:false,
//         error:null
//     },
//     extraReducers:(builder) =>{
//         builder
//         .addCase(fetchUsers.pending,(state)=>{
//             state.loading=true
//         })
//         .addCase(fetchUsers.fulfilled,(state,action) =>{
//             state.loading = false
//             state.list=action.payload
//         })
//         .addCase(addUser.pending,(state)=>{
//             state.loading=true
//         })
//         .addCase(addUser.fulfilled,(state,action)=>{
//              state.loading=false
//              state.list.push(action.payload)
             
//         })


//     }

// })
// export default userSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(`${BASE_URL}/api/users/`)
    return response.data
})

export const addUser = createAsyncThunk('users/addUser', async (user) => {
    const response = await axios.post(`/api/api/users`, user);
    return response.data
})
export const removeUser = createAsyncThunk('users/removeUser', async (id) => {
    await axios.delete(`/api/api/users${id}`);
    return id
})
export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
    const response = await axios.put(`/api/api/users/${user.id}`, user); 
    return response.data;
    console.log(user);
    
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload
            })
            .addCase(addUser.pending, (state) => {
                state.loading = true
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false
                state.list.push(action.payload)
            })
            .addCase(removeUser.pending, (state) => {
                state.loading = true
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.loading = false
                state.list = state.list.filter(user => user.id !== action.payload)
                console.log(action.payload);
                
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                const index = state.list.findIndex(user => user.id === action.payload.id)
                if (index !== -1) {
                    state.list[index] = action.payload
                }       
            })                  
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })



    }
})

export default userSlice.reducer;