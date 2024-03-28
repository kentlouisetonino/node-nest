### API Testing
#
> - This is based on Postman testing.

> - You must login first to obtain the accessToken.

```bash
# Create a user data.
Method: POST
URL: http://localhost:11000/api/user/create
Headers:
    Authorization: Bearer Token,
Raw-JSON Payload
    firstName: string,
    lastName: string,
    email: string,
    password: string,
Success Reponse:
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accessToken: string,
    createdAt: string,
    updatedAt: string,
Error Response:
    statusCode: number,
    message: string,

# Update a user data.
Method: POST
URL: http://localhost:11000/api/user/update
Headers:
    Authorization: Bearer Token,
Raw-JSON Payload
    id: number
    firstName: string,
    lastName: string,
Success Reponse:
    id: number,
    firstName: string,
    lastName: string,
    accessToken: string,
    updatedAt: string,
Error Response:
    statusCode: number,
    message: string

# Delete a user.
Method: DELETE
URL: http://localhost:11000/api/user/delete?id=
Headers:
    Authorization: Bearer Token,
Success Reponse:
    statusCode: number,
    message: string,
Error Response:
    statusCode: number,
    message: string,

# Get all user.
Method: GET
URL: http://localhost:11000/api/user/all
Headers:
    Authorization: Bearer Token,
Success Reponse:
    id: number,
    firstName: string,
    lastName: string,
    accessToken: string,
    updatedAt: string,
Error Response:
    statusCode: number,
    message: string,

# Get user info via ID.
Method: GET
URL: http://localhost:11000/api/user/info?id=
Headers:
    Authorization: Bearer Token,
Success Reponse:
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accessToken: string,
    accessToken: string,
    createdAt: string,
    updatedAt: string,
Error Response:
    statusCode: number,
    message: string,

# Get user info via email.
Method: GET
URL: http://localhost:11000/api/user/info?email=
Headers:
    Authorization: Bearer Token,
Success Reponse:
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accessToken: string,
    accessToken: string,
    createdAt: string,
    updatedAt: string,
Error Response:
    statusCode: number,
    message: string,
```
