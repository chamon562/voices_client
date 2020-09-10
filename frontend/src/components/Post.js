import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
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
        </div>
    )
}

export default Post