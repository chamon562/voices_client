import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const path = require('path')
// const cloudinary = require('cloudinary')

// cloudinary.config(process.env.CLOUDINARY_URL)

const Profile = (props) => {
  const [bioInput, setBioInput] = useState("");
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async () => {
    
    console.log(image)
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'cloudimages')
    try {
      setLoading(true)
      // make get request to api
      const res = await axios.post("https://api.cloudinary.com/v1_1/chamon562/", formData)
      const imageUrl = res.data.secure_url
      console.log(imageUrl)
      // const image = await axios.post()
    }
    catch(error){
      console.log(error)
    }
    

    

    setLoading(false)
  }
  
  // const handleFile = async (e) =>{  
  //   const file = e.target.files[0]
  //   console.log(e.target.files[0])
    
  // }

  // const handleUpload = aync (e) =>{
  //   console.log
  // }
  // console.log('Line 4 Profile.js Front end',props)
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updatedBio = await axios.put(
        `${REACT_APP_SERVER_URL}/api/users/${props.user.id}`,
        {
          bio: bioInput,
        }
      );
      props.nowCurrentUser(updatedBio.data);
      // have a way to store whatever is being typed into the input box
    } catch (error) {
      console.log(error);
    }
  };

  const form = (
    <div>
      <h5>New Artist? say something about you.</h5>
      <form onSubmit={handleSubmit}>
        <input
          value={bioInput}
          type="text"
          onChange={(event) => setBioInput(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
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
      {props.user.imageUrl ?
        <img  src={props.user.imageUrl} alt='profile pic'/> :
        <form onSubmit={uploadImage}>
          <input onChange={handlePicChange} required type="file" name="imageUrl" />
          <input type="submit" class="btn btn-primary" />
        </form>
      }
      <p>
        <strong>Name: </strong> {props.user.name}
      </p>
      <p>
        <strong>Email: </strong> {props.user.email}
      </p>

      <p>content: {props.user.content}</p>
      <p>birthday: {props.user.birthday}</p>
      <p>artist type: {props.user.artistType}</p>
      {props.user.bio ? (
        <h3>
          About Me: <br />
          {props.user.bio}
        </h3>
      ) : (
        form
      )}
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
