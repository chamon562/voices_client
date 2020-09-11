import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import Comment from './Comment'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Post = (props) => {
    console.log(props.post.postedBy)
    const userData = props.user
    const post = props.post
    // let [del, setDel] = useState('')
    let [redirect, setRedirect] = useState(false);
    let commentList = props.post.comments.map((comment, index) =>{
        return <Comment comment={comment} key={index} user={props.user} />
    })
    const handleDelete = (e) => {
        e.preventDefault()
        // setDel(e.target.value)
        axios.delete(`${REACT_APP_SERVER_URL}/api/posts/${props.post._id}`,{
            method: "DELETE"
        })
        .then(response =>{
            console.log(response)
            setRedirect(true)
            window.location.reload(false)
        })
    }
    if(redirect) return <Redirect to="/community" />
// 
    return(
        <div>
            <h3>title: {props.post.title}</h3>
            <h3>content: {props.post.content}</h3>
            <h3>category: {props.post.category}</h3>
            {console.log(props.post.postedBy)}
            {console.log(userData)}
           { post.postedBy._id === userData.id ? 
            <button onClick={handleDelete}>Delete Post</button>
            : 
            <></> 
        } 
            {/* <h3>title: {props.post.title}</h3>
            <h3>category: {props.post.category}</h3>
            <h3>content: {props.post.content}</h3>
            {/* render comment form  */} 
            {commentList ? commentList : <> </>}
           <CommentForm user={props.user} post={props.post}/>
        </div>
    )
}
export default Post