import React, {useState} from 'react'
import CommentForm from './CommentForm'

const Post = (props) =>{
    return(
        <div>
            <h3>title: {props.post.title}</h3>
            <h3>category: {props.post.category}</h3>
            <h3>content: {props.post.content}</h3>
            {/* render comment form  */}
           <CommentForm user={props.user} post={props.post}/>
        </div>
    )
}

export default Post