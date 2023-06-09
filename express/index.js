const express = require('express');
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
