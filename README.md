### DESCRIPTION
#
> - A Node.js practice project that uses Nest.js framework.

<br />
<br />



### LOCAL DEVELOPMENT
##
> - Create a `.env` file in the root directory and put the key value pair.

```bash
# This is needed for authentication.
AUTH_JWT_SECRET=jwtTest123456
AUTH_PASSWORD_SECRET=passwordTest123456

# Connecting with MySQL database.
DB_HOST=localhost
DB_PORT=3310
DB_NAME=node-nest
DB_USER=root
DB_ROOT_PASSWORD=root

# For server port.
PORT=11000
```

> - Run the following commands.

```bash
# Run first the dockerize MySQL engin.
docker-compose up --build

# Run the installation of packages and dependency.
yarn install

# For table migration in MySQL database.
yarn migration:run

# Start server for development.
yarn start:dev
```

> - Connecting dockerize database to a database client (Workbench, DBeaver).

```bash
Server Host: localhost
Port: 3310
Database: nodenest
Username: root
Password: root
```
