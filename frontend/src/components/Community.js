import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostForm from '../components/PostForm'
import Post from '../components/Post'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Community = (props) =>{
    console.log(props)
    let [comPosts, setComPosts] = useState(undefined)
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')
    // let [category, setCategory] = useState('')
    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/api/posts/post` )
        .then(res=>{
            console.log(res.data.post)
           let tempComPosts =  res.data.post.map((p, index) =>{
                return <Post post={p} key={index} user={props.user}/>
            }) 
            setComPosts(tempComPosts)
        })
    }, []) 
    

    
    // let [comments, setComments] = useState('')

    // const handleComments = (e) => {
    //     setComments(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const comment = {comments}
    //     axios.post(`${REACT_APP_SERVER_URL}/api/comments/new`, comment, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             comments
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer '+localStorage.getItem('jwt')
                
    //         }
    //         .then(res =>{
    //             setComments(res.data.comments)
    //         })
    //         .catch(err => 
    //             console.log(err))
    //     })
    // }

    return(
        <div>
            <h1>Community Page</h1>
            <PostForm user={props.user}/>
            {comPosts ? comPosts : <> </>}
            <div>
                {/* <p>title: {title}</p>
                <p>content: {content}</p>
                <p>category: {category}</p> */}
            </div>
            
            {/* <form onSubmit={handleSubmit}> */}
                {/* <div>
                    <label htmlFor="">Comment</label>
                    <input type="text" comments="comments" value={comments} onChange={handleComments} />
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form> */}
        </div>    
    )
}
export default Community 
