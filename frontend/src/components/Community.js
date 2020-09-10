import React, { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Community = (props) => {
  let [posted, setPosted] = useState({});

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/posts/post`)
    .then(response => {
    //   console.log(response.data);
      setPosted(response.data);
      // use effect takes 2nd parameter which is option pass in empy array [] this use effect will only run once
    }, []);
}, []);
// console.log(posted.foundPost)
  

  return (
    <div>
      <h1>Community Page</h1>
      <div>
        <PostForm user={props.user} />
      </div>
      <div>
        <h1>Posts</h1>
          <h5></h5>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Community;
