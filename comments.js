// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route for the comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 