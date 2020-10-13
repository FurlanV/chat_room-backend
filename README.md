# ChatRoom

Simple chat room implementation with Node.js+Express and Mongoose

## About the backend

The backend is an secure REST API that uses Json Web Tokens to generate access tokens.

The API has the following endpoints:
 
- [POST] /auth (user authentication)
- [POST] /users (create new user)
- [POST] /newMessage (receives a message from user)
- [GET] /users/:userId (get user information)
- [GET] /messages (get list with all messages)
