import { Routes,Route,Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import Dashboard from "./pages/dashboard"
function App() {
  

  return (
    <>
    <nav>
      <Link to="/Home">Home</Link><br></br>
      <Link to="/About">About</Link>
    </nav>
    <Routes>
     <Route path="/Home" element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path="/Users/:id" element={<User/>}/> 
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
