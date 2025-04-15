import { useState } from "react";
const Vehicleinfo=()=>{
const [scooter, setscooter]=useState({
    name:"access",
    make:"japaneese",
    year:2010,
    color:'green'
})
const update=()=>{
    setscooter(previousstate=>{
        return{...previousstate,name:"i10",make:"korean"}
    })
}
return(
    <div>
        <h1>vehicle info</h1>
        <h3>name:{scooter.name}</h3>
        <h3>make:{scooter.make}</h3>
        <h3>year:{scooter.year}</h3>
        <h3>color:{scooter.color}</h3>
        <button onClick={update}>Update</button>
    </div>
)
}
export default Vehicleinfo
