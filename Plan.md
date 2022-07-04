# getting Started
- npx create-react-app name --template redux 
- Delete App.test, logo.svg, setuptest and clear everything inside APP.css && Delete <Header> Section From APP.js, change classname from App to app, delete import logo, counter.
- In feature Folder>Counter folder Delete counter.module.css & counter.js and move rest of the files to Feature Folder and Delete the counter folder.
- in app Folder> Store.js Delete  the word COUNTER ONLY

# Building The App[Mail]
A:- #Building the Header#[install material ui -- npm install @mui/material @emotion/react @emotion/styled && --npm install @mui/icons-material] [Import IconButton get the RIPPLE EFFECT on ICON and import AVATAR for Picture]


B:- #Building the Sidebar#


C:- #Install react router [Install react-router,--npm install react-router-dom@5.3.3(this version supports SWITCH) it helps to have multiple pages inside the web -- npm add react-router-dom && Import all this import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; #INSIDE APP.JS && Suround the App inside <Router></Router>] 


D:- #Building the Middle Part i.e EmailList-Settings, Email-list Sections(Primary, Social, Promotions), EmailRow and Using Function history with Hook useHistory.


E:- #Building the Mail Part.
when we Click on the Mail what we See.


F:- #Implementing REDUX
*S6.1:-Go to app Folder>>Store.js(it is the Redux file/tools) && Change the Word COUNTER to MAIL from everywhere in the file.
*S6.2:- go to feature Folder and change counterSlice.js to mailSlice.js && word counter to mail from everywhere in the file.[The Word Slice is the SMALL part of the BIGGER Data Layer i.e mailSlice, userSlice, ... ]
*6.3:- go to mailSlice.js and make some changes

G:- #building the Compose>>sendMail component[We will use REACT HOOKS because They Help Us to VALIDATE FORMS]
[-- go to app.js and add <sendMail> component] [Install react hook library for FORMS --npm add react-hook-form]

H:-(8.1-8.)-- #Using REDUX[Using the SLICES from the MAILSLICE.JS to get the ACTION/DETAILS from BIGGER DATA-LAYER]
[When we Click the COMPOSE Button it will change its STATE in REDUX_STORE which Shows This FORM][App.Js(8.2)]
[go to sidebar where the Compose Button is, Now to TRIGGER the SendMail pop-up We Use The DISPATCH Action in REDUX]
[Do the same for Cross Button in SendMail(8.5)]

I:- Firebase Google Authentication (Full Login) 
Firebase's Firestore realtime Database.
Deploy the App with Firebase.[https://gmaiil-clone-v1.web.app/]
