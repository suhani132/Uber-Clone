# Uber-Clone
# User API Documentation{
  

## Authentication
The API uses JSON Web Tokens (JWT) for authentication. After successful registration, a token is returned that should be used in subsequent requests.


**POST** `/users/register`

Creates a new user account.

#### Request Body Schema
```json
{
  "fullname": {
    "firstname": "string",    // required, min 3 chars
    "lastname": "string"      // optional, min 3 chars if provided
  },
  "email": "string",         // required, valid email, min 5 chars
  "password": "string"       // required, min 6 chars
}
```

#### Success Response
Code: 201 CREATED
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "_id": "507f1f77bcf86cd799439011"
  }
}
```

#### Error Responses
Code: 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 chars long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```
#### Example Response
Code: 200 OK
```json
{
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Smith"
        },
        "email": "jane@example.com",
        "_id": "507f1f77bcf86cd799439012"
    }
}
```