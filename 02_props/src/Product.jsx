const Myproduct=({products,addtocart})=>{
    return (
        <>
        <h1>products</h1>
        <ul>
            {products.map((item,index)=>(
                <li key={index}>{item}
                <button onClick={()=>addtocart(item)}>Add to cart</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Myproduct