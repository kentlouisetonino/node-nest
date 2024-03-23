### DESCRIPTION
#
> - A Node.js practice project that uses Nest.js framework.

> - Available endpoints.

```bash
# Url of the backend.
http://localhost:11000

# Check if endpoint is ready.
/
```

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
DB_NAME=nodenest
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

# Start server for development.
yarn start:dev
```

> - Typeorm migration commands.

```bash
# Create an empty migration.
yarn typeorm migration:create src/migrations/<name>

# To generate a new migration based on changes.
yarn typeorm migration:generate src/migrations/<name> -d ./ormconfig.ts

# Run the migration
yarn typeorm migration:run -d ./ormconfig.ts

# Reverting the migration.
yarn typeorm migration:revert -d ./ormconfig.ts
```

> - Connecting dockerize database to a database client (Workbench, DBeaver).

```bash
Server Host: localhost
Port: 3310
Database: nodenest
Username: root
Password: root
```
