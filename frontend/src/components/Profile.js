import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
  const [bioInput, setBioInput] = useState("");
  // console.log('Line 4 Profile.js Front end',props)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const updatedBio = await axios.put(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`,{
       bio: bioInput
      })
      props.nowCurrentUser(updatedBio.data)
      // have a way to store whatever is being typed into the input box
      
    } catch (error) {
      console.log(error)
    }
  };

  const form = (
    <div>
      <h5>New Artist? say something about you.</h5>
      <form onSubmit={handleSubmit}>
        <input value={bioInput} type="text" onChange={(event) => setBioInput(event.target.value)}></input> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  // handleDelete = () => {
  //     axios.delete(`${REACT_APP_SERVER_URL}/api/users/:id`, userData)
  //     .then()
  // }
  const userData = props.user ? (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Name: </strong> {props.user.name}
      </p>
      <p>
        <strong>Email: </strong> {props.user.email}
      </p>
      <p>
        <strong>ID: </strong>
        {props.user.id}
      </p>
      <p>content: {props.user.content}</p>
      <p>birthday: {props.user.birthday}</p>
      <p>artist type: {props.user.artistType}</p>
      {props.user.bio ? props.user.bio : form}
    </div>
  ) : (
    <h4>Loading ...</h4>
  );
  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };
  return <div>{props.user ? userData : errorDiv()}</div>;
};
export default Profile;
