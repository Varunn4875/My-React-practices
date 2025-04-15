const Mycart=({cart})=>{
    return (
        <>
        <h1>cart:{cart.length}</h1>
        <ol>
            {cart.map((item,index)=>(
                <li key={index}>{item}
                </li>
            ))}
        </ol>
        </>
    )
}
export default Mycart