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

### Login User
POST /users/login

Authenticate existing user and get token.

Request Body Schema{
  "email": "string",     // required, valid email
  "password": "string"   // required, min 6 chars
}
Success Response
Code: 200 OK
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

Error Responses
Code: 401 UNAUTHORIZED

{
  "message": "Invalid email or password"
}

 Get User Profile
GET /users/profile

Retrieve the profile of the authenticated user.

Success Response
Code: 200 OK
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "_id": "507f1f77bcf86cd799439011"
  }
}
Error Responses
Code: 401 UNAUTHORIZED

. Logout User
GET /users/logout

Success Response
Code: 200 OK
{
  "message": "Logged out successfully"
}
Error Responses
Code: 401 UNAUTHORIZED
{
  "message": "Unauthorized"
}

## POST 
/captains/register
{
  "fullname": {
    "firstname": "string",    // required, min 3 chars
    "lastname": "string"      // optional, min 3 chars if provided
  },
  "email": "string",         // required, valid email
  "password": "string",      // required, min 6 chars
  "vehicle": {
    "color": "string",       // required, min 3 chars
    "plate": "string",       // required, min 3 chars
    "capacity": "number",    // required, min 1
    "vehicleType": "string"  // required, one of ['car', 'motorcycle', 'auto']
  }
}


Success Response
Code: 201 CREATED

{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "507f1f77bcf86cd799439011"
  }
}