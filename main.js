require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
