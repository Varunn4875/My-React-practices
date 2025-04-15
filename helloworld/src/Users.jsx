const Users=()=>{
    const users=[
        {id:1,name:"varun"},
        {id:2,name:"selva"},
        {id:3,name:"veera"}
    ]
    const handleclick=(text)=>{
        console.log(`${text} clicked`);
        
    }
    return(
        <div>
            {users.map(obj =>(
                <h2 key={obj.id}>{obj.name}</h2>
            ))}
            {/* //here using key feauture is important when 
            we working with array of objects
            //it provides unique feautures */}

            {/* // key is used to optimize rendering
        */}

        <button onClick={()=> handleclick("button")}>click</button>
        </div> 

    )
}
export default Users