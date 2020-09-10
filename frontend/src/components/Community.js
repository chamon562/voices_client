import React, {useState, useEffect} from 'react'
import PostForm from '../components/PostForm'
import axios from 'axios'

const Community = (props) =>{
    const [loading, setLoading] = useState(false)
    const[ posts, setPosts]= useState([])
    
    const getPosts = () =>{
        let url = process.env.REACT_APP_SERVER_URL
        axios.get(`${url}/api/posts/`)
        .then(res => {
            setLoading(false)
            console.log(res.data)
            setPosts(res.data.results)
        })
        .catch(error => console.log(error))

    }

    useEffect(() => {
        
    }, [])

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