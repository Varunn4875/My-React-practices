import { useSelector,useDispatch } from "react-redux"
import { fetchPosts } from "../../redux/postSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const Posts=()=>{
    const{posts,status,error}= useSelector(state=>state.posts)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return(
        <>
        <h2 className="hero-title">Posts</h2>
        {status==='loading' &&<p>Loading...</p>}
        {status==='succeeded'&&(
            posts.map(item =>(
                <div className="post-card" key={item.id}>   
                    <h2 className="item-title">{item.title}</h2>
                    <Link to={`/posts/${item.id}`}>ViewPost</Link>
                </div>
    
            )) 
        )}
        </>
    )

}
export default Posts