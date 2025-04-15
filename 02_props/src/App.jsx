import Welcome from "./Props"
import Click from "./Click"
import Mycart from "./Cart"
import Myproduct from "./Product"
import { useState } from "react"


function App() {

  const [products,setproducts]=useState(["Apple","samsung","micromax"])
  const [cart,setcart]=useState([])
  // console.log(cart);
  
     const handleclick=(a)=>{
      alert(`${a}i have been clicked`)
      //here this {a} received from child click handleclick event
     }
  
     const addtocart=(item)=>{
      setcart(previouscart => [...previouscart,item])

     }
  return (
    <>
    <h1>Props</h1>
    <Welcome age={20} list={['hello','varun']}/>
    <Click handleclick={handleclick}/>
    <Mycart cart={cart}/>
    <Myproduct products={products} addtocart={addtocart}/>
    </>
  )
}

export default App
