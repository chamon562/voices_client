import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Post = (props) =>{
    const userData = props.user
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [category, setCategory] = useState('')
    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }
    const handleContent = (e) =>{
        setContent(e.target.value)
    }
    const handleCategory = (e) =>{
        setCategory(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newPost = {title, category, content}
        axios.post(`${REACT_APP_SERVER_URL}/api/posts/newpost`, newPost)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }
    return(
        <div>
            <h1>Post Your Things:</h1>
            <h2>{props.title}</h2>
            <h2>{props.category}</h2>
            <h2>{props.content}</h2>
            <div className="row mt-4">
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" title="title" value={title} onChange={handleTitle} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input type="text" category="category" value={category} onChange={handleCategory} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
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
export default Post