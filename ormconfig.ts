const DataSource = require('typeorm').DataSource;

// Hard code the values.
// Process ENV not working properly.
const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3310,
  username: 'root',
  password: 'root',
  database: 'nodenest',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/src/migrations/*.js'],
  ssl: false
});

module.exports = connectionSource;
