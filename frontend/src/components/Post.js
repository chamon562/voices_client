import React, { useState, useEffect } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Post = (props) =>{
    
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [category, setCategory] = useState('')


    // useEffect(()=>{
    //     axios.get(`${REACT_APP_SERVER_URL}/api/posts/post`)
    //     .then(response=>{
    //         console.log(response.data)
    //         setTitle(response.data.title)
    //         setContent(response.data.content)
    //         setCategory(response.data.category)
    //     })
    // }) 

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
        const newpost = {title, content, category}
        axios.post(`${REACT_APP_SERVER_URL}/api/posts/newpost`, newpost, {
            method: "POST", 
            body: JSON.stringify({
                title,
                content,
                category
            }),
            headers:{
                'Content-Type': 'application/json',
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
       
        .then(res => console.log(res.data) )
    .catch(error => console.log(error));
    }
        
    return(
        <div>
            <h1>Post Your Things:</h1>
            
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