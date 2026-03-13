import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchPost } from "../../redux/postSlice";
import '../../App.css'


const PostShow=()=>{
    const {id}=useParams()
    const {post,postStatus,postError}=useSelector(state=>state.posts)
  const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPost(id))

    },[])
    return(
        <>
        <h3>PostShow</h3>
        {postStatus ==='loading'  &&  <p>Loading</p>}
        {postStatus === 'succeeded' && (
            <div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.body}</p>
            </div>
        )}
        </>
    )
    

}
export default PostShow