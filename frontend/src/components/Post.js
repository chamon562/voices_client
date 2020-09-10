import React, {useState} from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

const Post = (props) =>{
    let commentList = props.post.comments.map((comment, index) =>{
        return <Comment comment={comment} key={index} user={props.user} />
    })
    return(
        <div>
            <h3>title: {props.post.title}</h3>
            <h3>category: {props.post.category}</h3>
            <h3>content: {props.post.content}</h3>
            {/* render comment form  */}
            {commentList ? commentList : <> </>}
           <CommentForm user={props.user} post={props.post}/>
        </div>
    )
}

export default Post