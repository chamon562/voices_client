import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const CommentForm = (props) =>{
    // console.log(props)
    let [content, setContent] = useState('')
    let [redirect, setRedirect] = useState(false);


    const handleContent = (e) =>{
        setContent(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const comment = {user: props.user, content, post: props.post}
        axios.post(`${REACT_APP_SERVER_URL}/api/comments/${props.post._id}/new`, comment)
        .then(response => {
            console.log(response.data);
            setRedirect(true)
        //    console.log(redirect) 
            window.location.reload(false)
        })
        
    }   
    // console.log(redirect)
    if(redirect) return <Redirect to="/community" />
    
    return(

        <div>
            <h1>Leave a Comment</h1>
            
            <div className="row mt-4">
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="content">Comment</label>
                                <input type="text" content="content" value={content} onChange={handleContent} className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentForm