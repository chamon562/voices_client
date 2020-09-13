import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const path = require('path')


const Profile = (props) => {
  console.log(props)
  const [user, setUser] = useState(props.user)
  const [bioInput, setBioInput] = useState("");
  const [image, setImage] = useState("")
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/users/current`)
      .then(response => {
        console.log(response.data)
        setUser(response.data)
        // console.log(user)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(bioInput)
    // console.log(props.user)
    axios.put(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`, { bioInput })
      .then(response => {
        console.log(response.data)
        setUser(response.data)
        user.bio.save()

        // console.log(response)
      })
      .catch(error => {
        console.log("error", error)
      })
  }

  const form = (
    <div>

      <form onSubmit={handleSubmit}>
        <input
          value={bioInput}
          type="text"
          onChange={(event) => setBioInput(event.target.value)}></input>
        <button type="Post">Submit</button>
      </form>
    </div>
  );
  const handlePicChange = (e) => {
    setImage(e.target.value)
  }
  const handlePicSubmit = (e) => {
    e.preventDefault()
    console.log(image)
    // axios.post(`${REACT_APP_SERVER_URL}/api/users/profilePic`, upload.single(image))
    // .then(response =>{
    //   console.log(response.data)
    // })
    // .catch(error =>{
    //   console.log(error)
    // })
  }
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
        <strong>Content: </strong>{props.user.content}
      </p>
      <p>
        <strong>Birthday: </strong>{props.user.birthday}
      </p>
      <p>
        <strong>Artist type: </strong>{props.user.artistType}
      </p>

      <h3> About Me: </h3>
      <p>{user.bio}</p>
      {form}
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