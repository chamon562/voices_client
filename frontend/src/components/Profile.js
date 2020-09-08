import React from 'react'
import {Link} from 'react-router-dom'

const Profile = (props) =>{
   

    // handleDelete = () => {
    //     axios.delete(`${REACT_APP_SERVER_URL}/api/users/:id`, userData)
    //     .then()
    // }


    const userData = props.user ?
    
    (<div>
        <h1>Profile</h1>
        <p><strong>Name: </strong> {props.user.name}</p>
        <p><strong>Email: </strong> {props.user.email}</p>
        <p><strong>ID: </strong>{props.user.id}</p>
        <p>content: {props.user.content}</p>
        <p>birthday: {props.user.birthday}</p>
        <p>artist type: {props.user.artistType}</p>
        <p>bio : {props.user.bio}</p>
    </div>) : <h4>Loading ...</h4>

        const errorDiv = () => {
            return (
                <div className="text-center pt-4">
                    <h3>Please <Link to="/login">login</Link> to view this page</h3>
                </div>
            )
        }

        return(
            <div>
                {props.user ? userData: errorDiv()}
                
            </div>
        )
        console.log(props.user)
}
export default Profile