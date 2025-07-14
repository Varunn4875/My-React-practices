import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser,updateUser } from "./redux/userSlice";
import { useEffect } from "react";

const UserForm=({user})=>{
    const {register,handleSubmit,reset,setValue,formState:{errors}} =useForm()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(user){
            setValue("name",user.name)
            setValue("email",user.email)
        }
    }, [user, setValue])



    const submitData =(data) =>{
        if(user){
            dispatch(updateUser({id:user.id, ...data})).then(()=>{
                console.log("User updated:",data)
                console.log(user)
            })
        } else{
            dispatch(addUser(data)
            // .then(()=>{
            //     console.log("User added:,",data);
                
            // }))
        )}
            
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submitData)} className="mb-4">
            <div className="mb-3">
                  <label  className="form-label">Name</label>
                  <input 
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                   placeholder="Your Name"
                   {...register('name',{required: 'Name is required'})}
                   />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
            <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="name@example.com"
                  {...register('email',{required: 'Email is required'})}
                  />
                  {errors.email  && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            {/* <button className="btn btn-primary" 
            type="submit">Add User</button> */}

            <button className="btn btn-primary" 
            type="submit">{user ? "Update User" : "Add User"}</button>
        </form>
    

    )

}
export default UserForm;