import React, {useState} from 'react'
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import Comment from './Comment'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }
  
//   function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }
  
//   const useStyles = makeStyles((theme) => ({
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   }));

const Post = (props) => {
    const userData = props.user
    const post = props.post
   
    

    // let [del, setDel] = useState('')
    let [redirect, setRedirect] = useState(false);

    const [open, setOpen] = React.useState(false);
    // const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    let commentList = props.post.comments.map((comment, index) =>{
        return <Comment comment={comment} key={index} user={props.user} />
    })
    
    const handleDelete = (e) => {
        e.preventDefault()
        // setDel(e.target.value)
        axios.delete(`${REACT_APP_SERVER_URL}/api/posts/${props.post._id}`,{
            method: "DELETE"
        })
        .then(response =>{
            console.log(response)
            setRedirect(true)
            window.location.reload(false)
        })
    }
    if(redirect) return <Redirect to="/community" />
// 
    return(
        <div className="posts">
            <button onClick={handleOpen}>{props.post.title}</button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <div className="modals" >
                <h3 className="title">title: {props.post.title}</h3>
                <h3 className="content">content: {props.post.content}</h3>
                <h3 className="category">category: {props.post.category}</h3>
                {props.currentUser ? 
                <button onClick={handleDelete}>Delete Post</button>
                :
                <></>
                }
                <div className="commlist">
                {commentList ? commentList : <> </>}
                </div>
                <div className="form">
            <CommentForm user={props.user} post={props.post} />
                </div>
            </div>
            </Modal>

        </div>
    )
}

export default Post