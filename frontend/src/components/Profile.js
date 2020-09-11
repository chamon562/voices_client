import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const path = require('path')
// const cloudinary = require('cloudinary')
// cloudinary.config(process.env.CLOUDINARY_URL)

const Profile = (props) => {
  console.log(props)
  const [user, setUser] = useState(props.user)
  const [bioInput, setBioInput] = useState("");
  // const [image, setImage] = useState("")
  // const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    axios.get(`${REACT_APP_SERVER_URL}/api/users/current`)
    .then(response => {
      console.log(response.data)
      setUser(response.data)
      // console.log(user)
    })
  },[])

  // const uploadImage = async () => {
    
  //   console.log(image)
  //   const formData = new FormData()
  //   formData.append('file', image)
  //   formData.append('upload_preset', 'cloudimages')
  //   try {
  //     setLoading(true)
  //     // make get request to api
  //     const res = await axios.post("https://api.cloudinary.com/v1_1/chamon562/", formData)
  //     const imageUrl = res.data.secure_url
  //     console.log(imageUrl)
  //     // const image = await axios.post()
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  //   setLoading(false)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(bioInput)
    // console.log(props.user)
    axios.put(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`, {bioInput})
    .then(response => {
      console.log(response.data)
      setUser(response.data)
      user.bio.save()

      // console.log(response)
    })
    .catch(error=>{
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
