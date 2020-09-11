import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostForm from '../components/PostForm'
import Post from '../components/Post'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Community = (props) =>{

    let [comPosts, setComPosts] = useState('')
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')
    // let [category, setCategory] = useState('')
    
    
    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/api/posts/post` )
        .then(res=>{
            console.log(res.data)
            let temComPosts = res.data.post.map((p, index)=>{
                return <Post user={props.user}  post={p} key={index} />
            })
            setComPosts(temComPosts)
        })
    },[]) 
    

    return(
        <div className="post">
            <h1>Community Page</h1>
            <PostForm user={props.user}/>

            {comPosts ? comPosts : <></>}
            

        </div>    
    )
}
export default Community 
