require('dotenv').config();

const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

const port = process.env.APP_PORT || 3000;
const host = process.env.DATABASE_HOST || 'localhost';
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mssql',
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log('DATABASE CONNECTED');
    app.listen(port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${port}`);
    });
  })
  .catch(err => {
    console.error('UNABLE TO CONNECT TO DATABASE ', err);
  });
