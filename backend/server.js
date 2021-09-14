const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ERROR PAGES */

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* START SERVER */
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});