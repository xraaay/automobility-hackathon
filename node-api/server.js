const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser.json())

app.use("/api", routes)

app.listen(8080, () => {
  console.log('XxVato Locos CodersxX')
})

