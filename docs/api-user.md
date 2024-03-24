### API TESTING
#
> - This is based on Postman testing.

> - You must login first to obtain the accessToken.

```plaintext
Method: POST
URL: http://localhost:11000/api/user/create
Headers:
    {
        Authorization: Bearer Token,
    }
Raw-JSON Payload:
    {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    }
Success Reponse:
    {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        accessToken: string,
        createdAt: string,
        updatedAt: string,
    }
Error Response:
    {
        statusCode: number,
        message: string,
    }
```
