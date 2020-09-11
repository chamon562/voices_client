import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import CommentForm from './CommentForm'
import Comment from './Comment'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Post = (props) => {

    let [del, setDel] = useState('')
    let [redirect, setRedirect] = useState(false);
    
    
    const handleDelete = (e) => {
        e.preventDefault()
        setDel(e.target.value)
        axios.delete(`${REACT_APP_SERVER_URL}/api/posts/${props.post._id}`,{
            method: "DELETE"
        })
        .then(response =>{
            console.log(response)
            setRedirect(true)
            window.location.reload(false)
        })
    }
    if(redirect) return <Redirect to="/Community" />
   let commentList = props.post.comments.map((comment, index) =>{
        return <Comment comment={comment} key={index} user={props.user} />
    })

    return(
        <div>
            <h3>title: {props.post.title}</h3>
            <h3>content: {props.post.content}</h3>
            <h3>category: {props.post.category}</h3>
           {props.currentUser ? 
            <button onClick={handleDelete}>Delete Post</button>
            :
            <></>
            }
        {commentList ? commentList : <> </>}
           <CommentForm user={props.user} post={props.post}/>

        </div>
    )
}

export default Post