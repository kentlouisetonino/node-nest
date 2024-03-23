### API TESTING
#
> - This is based on Postman testing.

```plaintext
Method: POST
URL: http://localhost:11000/api/auth/login
Raw-JSON Payload:
{
    email: string,
    password: string
}

Success Reponse:
{
    accessToken: string
}

Error Response:
{
    message: string,
    error: string,
    statusCode: string
}
```
