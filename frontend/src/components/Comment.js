import React, {useState} from 'react'

const Comment = (props) => {
    return(
        <div>
        <h2>{props.user.name}</h2>
        <h3>{props.comment.content}</h3>
        </div>
    )
}

export default Comment