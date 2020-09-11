import React, {useState, useEffect} from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Comment = (props) => {
    let [author, setAuthor] = useState('')
    useEffect(() =>{
        axios.get(`${REACT_APP_SERVER_URL}/api/users/${props.comment.user}`)
        .then(response =>{
            if(response.data){
                setAuthor(response.data)
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }, []) 
    return(
        <div>
        <h2>{author.name}</h2>
        <h3>{props.comment.content}</h3>
        </div>
    )
}
export default Comment