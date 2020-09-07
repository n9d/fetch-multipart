const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'index.html')));

app.post('/r', (req, res) => {
  console.log(`****** recieved request ******\n${req.body}\n****** end ****`)
  console.log(req.headers)
  console.dir(req.body)
  res.send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


