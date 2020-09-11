# p3_voices_client
Project 3 Pitch
Fork & Clone this repo.
Review the Project 3 requirements and check out some examples.
# Installation 
- Go to Github.com and git clone in terminal both : https://github.com/chamon562/p3_voices_client & https://github.com/chamon562/p3_voices_server
- after git cloning both repos is finished. npm i in terminal to make sure all dependicies have been added. 
- cd into p3_voice_client/frontend then type npm start to start frontend.
- cd into p3_voice_server/backend then type nodemon in terminal start to start backend server.
Provide information in the following sections:

## Project Overview
(Include project idea/concept, project name, who owns git master repo on github, team name [if desired], team member roles, elevator pitch)
## Project Idea/Concept ❥
A full stack application that provides a safe and free community platform to share and express your voice as an artist, poet, lyricist but most of all a human being that expresses themselves, where self-expression and feeling human has been suppressed in these troubled times.
## Project Name ❥
voiceS
Your Voice, is my ›❤ Sound

Who owns git Master repo on github ❥
Channee Math
Channee's gitHub

Team Name ❥
The W A R R I O R S
"Fire it up, what it taste like? LEMONADE when its made right.. you ain't never met nobody who sees the stars the way we do, nobody who can love you as much as we do.."
BangBANG

Team Member Roles ❥
gitMaster / FrontEnd / BackEnd

Channee "Peace Maker" Math
> Channee's gitHub

CSS Trickster / FrontEnd / BackEnd

Philip "Imperial Diamond" Yap
> Philip's gitHub

BackEnd Warlock / FrontEnd / BackEnd

Nicholas "Maestro" Phillips
> Nicholas's gitHub

Honey Sting/Stang (Elevator Pitch) ❥
People are often frustrated by the effort it takes to express their voice in a free and safe zone where they can be heard. Our App eliminates the feeling of being imprisoned without a voice. For years, people have trusted society to safe guard freedom of expression however time and time again they have found themselves.. their.. voice restricted. With voiceS, you can express yourself freely and bring about creative freedom on a platform that not only values your voice but broadcasts it, with the power of community.

Models and Schemas
** Models & Schemas **
(A Model is a IMPLEMENTATION OF A SCHEMA! ye boi.)
(Because a Schema is the representation of a model)
(Recipe turned in to dishes)
(Template to document)
#FireSquad.

userSchema

artistType: Array,
name: String,
email: String,
password: String,
post: [postSchema],
bio: Text,
birthday: Date,
profilePic: String,
<!-- content: Array() work in progress-->

postSchema

user: String,
category: String,
title: String,
content: String,
textContent: Text,(specifically for long post)
comments: [commentSchema]
reactions: [reactionSchema]

commentSchema

user: Array
content: Text,
reactions: [reactionSchema]
reactionSchema (Stretch but a really needed stretch for the honey effect)

user: Array (grab by user id and then display the user name)
type: Array (of Reaction, setting it to Array can have how many display at once)
User Stories
As a User I can Signup / Login.
As a User I can publish my creative content.
As a User I can view other Users creative content.
As a User I can Edit / Delete my own creative content.
As a User I can comment on creative publications and Edit / Delete Comments.
As a User I can react (reactions/type of likes) to creative publications.

Wireframes
Home Page
Home Page
Signup Page
Signup Page
Login Page
Login Page
Profile
Profile Page
Community page
Community Page
Additional Technologies
Planned Technologies
MERN STACK
MongoDB
Express
React
Node
Bootstrap 4

JSX (lol)

Github Project (Kanban Board, set team members as contributors)

Optionals (Subject to Change at discretion of Team W A R R I O R S)
Cloudinary (May<-- May have User Profile Pics)
(MERN Stack expected [MongoDB, Express, React, Node], include any external APIs)
Work Allocation
Who is your Gitmaster? Who will be doing what?
FrontEnd / BackEnd

Yoel "Sugar Honey Bunny" Morad
> Yoel's gitHub

gitMaster / FrontEnd / BackEnd

Channee "Right Hand" Math
> Channee's gitHub

CSS Trickster / FrontEnd / BackEnd

Philip "Imperial Diamond" Yap
> Philip's gitHub

BackEnd Warlock / FrontEnd / BackEnd

Nicholas "Maestro" Phillips
> Nicholas's gitHub

Daily Sprints
September 4, 2020 Friday

## Standup 7:00PM to 9:00PM PST
- Set Up Server and Client Repo and Dependencies (if, time  scrub out models) else {res.send(Sprint2)}
September 5, 2020 Saturday

## September 6, 2020 Sunday

Standup 12:00PM

# p3 Goals
-    Set up Auth and get it working for the group
-    divide the repo into frontend and backend
-    Nick stub out community page front end.
-    Philip stub out comments section
-    Channee stub out about section inside profile
# p3 Progression
-    Made Repo for p3_server
-    Made Repo for p3_client
-    practice pull request from Nick & Phillip on terminal to git hub
-    practice git hub master merging
# p3 Road Blocks

## September 7, 2020 Monday (Labor Day)
Standup 12:00PM
# p3 Goals
-    Work out profile page
-    Work out post in front end
# p3 Progression
-    Able to practice git hub things. pushing and pulling up stream and merging.
-    Getting together Profile page 
-    Visuals on comment and post 
# p3 Road Blocoks
-    working on functionality 


## September 8, 2020 Tuesday
Standup 9:00PM
# p3 Goals
-   To be able to create update and delete bio, post, and comments.
-   Work on getting the functionality down for our pages
# p3 Progression
-   Able to have user add bio if they already havent. Has turnerary created to say if bio already exist show it, if not here is the form with submit for user to create a bio about them selves. 
-   able to post
# p3 Road Blocoks
-   Giving user to upload a profile picture 
Work TBD based off Standup

## September 9, 2020 Wednesday
Standup 9:00AM
# p3 Goals
- working out post and comments section
- have user be able to upload a profile picture
- have comments and post working on web page
# p3 Progression
- refactored back end routes for user, post and comment schema
- test back end on postman crud and get put edit delete working for user post

# p3 Road Blocoks
- comment was showing before but broke because trying to show specified user is connected with their post. 
- Cloudinary not connecting to database(may leave out)

## September 10, 2020 Thursday (Deployment)
Standup 9:00AM
# p3 Goals
- get comment and post working
- styling css and finishing README. 
- make sure all code is updated on github and working for all group members.
# p3 Progression
- together working out merge conflicts and going through which code is needed.
- was able to work out backend comment and post schema to have a one to many association. 
- comments console.log showing id connecting with user by changing props.user._id to props.user.id
- able to get delete button working for post
- profile user now able to edit their about me bio and updates on submit.
- did styling for background, lettering, and modals pop up for comments. 
- after merge conflicts resolved in TA session with 🙏ERIK Heikkila (thank so much!) to get all code from front end and back end working. 

# p3 Road Blocoks
- was having issues with delete button. functionality working but dispears after refresh. 
- leaivng out cloudinary and will keep for stretch goal because it would be nice to have user be able to upload a profile picture. 

## September 11, 2020 Friday (Presentations) \n yebb.
Standup 9:00AM
Work TBD based off Standup

(or otherwise general plan for accomplishing tasks, preferably broken down by day)
Make a PR when you're done!
Full Stack Your Voice, is my ›❤ Sound
A full stack application safe and free platform to share and express your voice as an artist, poet, musician but most of all a human being in these troubled times where self-expression and feeling human has gotten lost in translation.

## Favorite code snippets
- The group chose this code as our favorite code because from constant breaking and learning as we went along from each group member and getting help from GA staff that the process gave us so much understanding on what was happening. from the beggining of creating the postroute and have to find it the route and referenceing post route to be connected with comments and having the id connected with the current user. 
```js
// comments.js in backend
router.post('/:postId/new', (req,res)=>{
    console.log(req.body)
    // going into post and finding the post id
    db.Post.findOne({
        _id: req.body.post._id
    })
    .then(post =>{
        // console logging whats inside the post to get info we need
        console.log(post)
        // comments is associated with post and inside the post schema has comments attributed as an array. and pushing those comments in. only need the content and user from comments
            post.comments.push({
            content: req.body.content,
            user: req.body.user.id
        })
        // saving the post
        post.save()
        .then(post =>{
            // getting the info back as a json 
            res.json({post, user: req.body.user})
            console.log(post)
        })

    })
})
```

## Most hated code. 
- This code took the longest to figure out because we had trouble figuring out why it was breaking. first we thought it was the axios.post being wrong. then we thought the console.log showed props as defined but user was not defiend.  when adding comments then the problem after getting comments to render on the web page that it wasnt attached to the user. switched user on the back from _id to .id and that manage to fix who the comment belongs too. didnt redirect as perfect as planned but managed to get the page to reload then redirect to the community page. Doesnt end there, Once Rome Bell stayed with the group for so long helping with the code. we All merged code and after merge more things started breaking down. and then went to TA session to get help from the Erik Heikkila to get the code back on track to get pushed back to the whole team.
```js
 const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(props)
        const comment = {user: props.user, content, post: props.post}
        axios.post(`${REACT_APP_SERVER_URL}/api/comments/${props.post._id}/new`, comment)
        .then(response => {
            console.log(response.data);
            setRedirect(true)
        //    console.log(redirect) 
            window.location.reload(false)
        })
        
    }   js
```

TODO
[x] Setup Server
[x] Install Dependencies
[x] Install / Setup Linter
[x] Setup Express App
[x] Setup Not Found and Error Middlewares
[x] Model DB
What data will we store?
[x] Setup Mongoose Model(s)
[x] Setup Routes
Backend routes with crud.
[x] Comments
[x] Post
[x] Users
Frontend functionality that renders and grabs from MongoDB.
[x] Setup Client
[x] Profile Component to display user info and bio able to create and edit
[x] Community Component to store post, and postForm component
[x] Comments Component, able to have comments on community page 
[x] About Component, to display info about our voiceS app
[x] PostForm Component, grabs data and form has attributes to work for current user.
[x] Post Component having user attributes from Database and being able to display that info.
Finish README.md
[x]
[x] DEPLOY it like its HAWT!

## Honorable mentions
- Special thanks to Yoel Morad for Helping get this group started and working hard as always on the README and collective ideas. ALways give credit when its due and this guy always did what he could during the start. 
- Special Thanks to: Taylor Danielle, Rome Bell, Adam Honoré, Pete Fitton, Sarah King, Mac Jankowsky for helping the group get through so much hard times. All love to the GA instructor Staff. 
- Special Thanks to all the TA's at General Assembly: Erik Heikkila, Seany Phoenix, Zachary Wellsandt, and Mac Jankowsky.
- Special thanks To Nicholas Phillips, Philip Yap, and Channee Math. Worked really hard on all aspects in this project.



