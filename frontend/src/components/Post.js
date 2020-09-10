import React, {useState} from 'react'


const Post = (props) =>{
    return(
        <div>
            <h3>title: {props.post.title}</h3>
            <h3>category: {props.post.category}</h3>
            <h3>content: {props.post.content}</h3>
            <form>
                <input type="text"/>
                <button></button>
            </form>
        </div>
    )
}

export default Post