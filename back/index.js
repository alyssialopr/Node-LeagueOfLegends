const express = require('express');
const router = require('./router');
const cors = require('cors');
// import router from './router';



const app = express()
app.use(cors())
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World')
    });


app.listen(3000, () => {
    console.log('Server running on the treadmill')
  });