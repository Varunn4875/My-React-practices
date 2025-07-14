import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

 export const fetchPosts=createAsyncThunk('posts/fetchPosts', async()=>{
     const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
     return response.data
     })     //asusual this gives three states 
     //pending while loading
     //succeeded  -- fulfilled
     //failed  -- rejected

  export const fetchPost=createAsyncThunk('posts/fetchPost', async(id)=>{
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     return response.data

  })

const postSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[],
        status:'idle', //loading,succeed,failed
        error:null,
        post:{},
        postStatus:'idle',
        postError:null



    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{  //in builder each case is a reducer separately

            state.status="loading"
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            console.log(action)
            state.status='succeeded'
            state.posts=action.payload
        })
        .addCase(fetchPost.pending,(state)=>{

            state.postStatus="loading"
        })
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.postStatus='succeeded'
            state.post=action.payload
        })
        


    }
})
export default postSlice.reducer