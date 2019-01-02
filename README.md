# Technologies
* NodeJs/Express -- server
* Webpack -- module bundler
* Socket.io -- tcp websocket library
* Psssport.Js -- Authentication
* jQuery
* EJS template engine
* Mongodb/Mongoose

# Project Scope

The scope of the project is to build a simple chat app using modern web technologies like node, express and mongo db. The premise will be that users will be able to talk with each other in a group chat in real time. As I build this app, I will write down notes about the workflow.


# Plan
Workflow plan is to work in 55 minute increments with 5 minute breaks
* Install packages
* Build out webpack configurations
* Build the initial server
* Build template engine - partials, views, etc...
* Set up websocket connection
* Set up Authentication with passport.js
* Config database  — mongodb
* Build models -> routes
* Curl Scripts for testing
* Build out front-end chat functionalities
* Build UI - sign up/sign in
* Style
* ReadMe
* Configure for production
* Refactor

Users
* Username
* Password
Chats
* Users
* Content

# User Stories - MVP
* As a user, I want to be able to sign up
* As a user, I want to be able to sign in with username and password,
* As a user ,I want to be able to send a message to the group chat
* As a user, I want to be able to delete my messages in the group chat


ERD
![alt text](https://i.imgur.com/0Z553RV.png "Logo Title Text 1")

# Stretch Goals

* Lets users create a channel for chats
* Let users send private messages to each other
* Let users edit the messages they send to the group chat
* Let users see which other users in the group chat are online
* Let users change their password
* Let users delete their account

## References
* Webpack - https://www.youtube.com/channel/UCuRGaS7uXLAIrCrxKN_Ke7g
* Socket.io - https://www.codemeals.com/node-js-tutorials/chat-app-with-node/
* PassportJs - https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/ -- https://www.youtube.com/playlist?list=PLpPnRKq7eNW3Qm2OfoJ3Hyvf-36TulLDp
