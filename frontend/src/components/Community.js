import React, {useState} from 'react'
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Community = () =>{

    let [comments, setComments] = useState('')

    const handleComments = (e) => {
        setComments(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = {comments}
        axios.post(`${REACT_APP_SERVER_URL}/api/comments/new`, comment, {
            method: "POST",
            body: JSON.stringify({
                comments
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('jwt')
                
            }
            .then(res =>{
                serComments(res.data.comments)
            })
            .catch(err => 
                console.log(err))
        })
    }

    return(
        <div>
            <h1>Community Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Comment</label>
                    <input type="text" comments="comments" value={comments} onChange={handleComments}/>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Community 