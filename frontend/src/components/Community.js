import React from 'react'
import PostForm from '../components/PostForm'


const Community = (props) =>{
    return(
        <div>
            <h1>Community Page</h1>
            <div>
                <PostForm user={props.user}/>
            </div>
            <div>
                <h1>Posts</h1>
            </div>
        </div>
    )
}

export default Community