import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import Posts from './assets/pages/Posts'
import PostShow from './assets/pages/PostShow'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Posts/>}/>
      <Route path='/posts/:id' element={<PostShow/>}/>
      </Routes>
       
    </>
  )
}

export default App
