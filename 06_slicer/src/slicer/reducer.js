import { createSlice } from "@reduxjs/toolkit";
const initialState=JSON.parse(localStorage.getItem('uzers'))||[{id:1,name:'varun',email:"varunselvakumar6@mail.com"},
        {id:2,name:'priya',email:'riya@mail.com'}]

// [{id:1,name:'varun',email:"varunselvakumar6@mail.com"},
//     {id:2,name:'priya',email:'riya@mail.com'}
// ]
const userSlice=createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state,action)=>{
               state.push(action.payload)
               localStorage.setItem('uzers',JSON.stringify(state))
        },
        removeUser:(state,action)=>{
            //here filter creates new objects 
            //so return will be helpful when we filter
           const user=state.findIndex(user=>user.id==action.payload)
             console.log(user);
             state.splice(user,1)
             localStorage.setItem('uzers',JSON.stringify(state))
             
        }

    }
})
export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer;
