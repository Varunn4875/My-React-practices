import { useState } from 'react'
import './App.css'
import UserList from './UserList'
import UserForm from './UserForm'

function App() {
  const [selectedUser, setSelectedUser] =useState(null)

  const handleEditUser=(user)=>{
    setSelectedUser(user)
  }

  return (
    <div className='container mt-10'>
      <h1>User CRUD Application</h1>
      <UserForm user={selectedUser}/>
      <UserList onEditUser={handleEditUser}/> 
    </div>
  )
}

export default App
