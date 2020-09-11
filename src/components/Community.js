import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostForm from '../components/PostForm'
import Post from '../components/Post'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Community = (props) =>{
    console.log(props)
    let [comPosts, setComPosts] = useState(undefined)
    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/api/posts/post` )
        .then(res=>{
            // console.log(res.data.post)
            // console.log(props)
           let tempComPosts = res.data.post.map((p, index) =>{
                return <Post post={p} key={index} user={props.location.state?props.location.state.user:props.user}/>
            })
            setComPosts(tempComPosts)
        })
    }, [props]) 
    

    return(
        <div className="post">
            <h1>Community Page</h1>
            <PostForm user={props.location.state?props.location.state.user:props.user}/>
            {comPosts ? comPosts : <> </>}  

        </div>    
    )
}
export default Community 