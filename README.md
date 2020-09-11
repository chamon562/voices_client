# p3_voices_client
Project 3 Pitch
Fork & Clone this repo.
Review the Project 3 requirements and check out some examples.

Provide information in the following sections:

Project Overview
(Include project idea/concept, project name, who owns git master repo on github, team name [if desired], team member roles, elevator pitch)
Project Idea/Concept ❥
A full stack application that provides a safe and free community platform to share and express your voice as an artist, poet, lyricist but most of all a human being that expresses themselves, where self-expression and feeling human has been suppressed in these troubled times.
Project Name ❥
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

Channee "Right Hand" Math
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
# p3 Progression


# p3 Road Blocoks
- working in cloudinary.
Work TBD based off Standup

## September 10, 2020 Thursday (Deployment)
Standup 9:00AM
# p3 Goals
# p3 Progression
# p3 Road Blocoks
Work TBD based off Standup

## September 11, 2020 Friday (Presentations) \n yebb.
Standup 9:00AM
Work TBD based off Standup

(or otherwise general plan for accomplishing tasks, preferably broken down by day)
Make a PR when you're done!
Full Stack Your Voice, is my ›❤ Sound
A full stack application safe and free platform to share and express your voice as an artist, poet, musician but most of all a human being in these troubled times where self-expression and feeling human has gotten lost in translation.

TODO
[ ] Setup Server
[ ] Install Dependencies
[ ] Install / Setup Linter
[ ] Setup Express App
[ ] Setup Not Found and Error Middlewares
[ ] Model DB
What data will we store?
[ ] Setup Mongoose Model(s)
[ ] Setup Routes
What routes will we have?
[ ] Setup Client
[ ] DEPLOY it like its HAWT!



## mabe use later for cloudinary has 400 error POST in profile.js
const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)


  const uploadImage = async (event) =>{
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setLoading(true)
    const res = await fetch('https://api.cloudinary.com/v1_1/chamon562/image/upload', 
      {
      method: 'POST',
      body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }


  inside user data

   <input type="file"
       name="file"
       placeholder="Upload an image"
       onChange={uploadImage}
     />
      {loading ? (<h3>loading...</h3>)
      : (<img src={image} style={{width:'200px'}} />)}