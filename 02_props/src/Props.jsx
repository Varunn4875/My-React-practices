const Welcome=({name='guest',age,list})=>{
    // console.log(name)
    return (
        <>
        <h3>hello {name} and congrats your age is {age}</h3>
        <ul>
        {list.map((item,index)=>(
            // console.log(item,index),
            <li key={index}>{item}</li>
        ))}
        </ul>
        
        </>
    )
}
export default Welcome