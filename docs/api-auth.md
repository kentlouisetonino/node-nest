### API Testing
#
> - This is based on Postman testing.

```bash
# Get an acesss token.
Method: POST
URL: http://localhost:11000/api/auth/login
Raw-JSON Payload:
    email: string,
    password: string,
Success Response:
    accessToken: string,
Error Response:
    message: string,
    error: string,
    statusCode: string,
```
