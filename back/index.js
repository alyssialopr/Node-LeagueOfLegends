import express from 'express';
import cors from 'cors';
import router from './router.js';



const app = express()
app.use(cors())
// app.use(router);
app.use('/', router); 

app.get('/', (req, res) => {
    res.send('Hello World')
    });


app.listen(3000, () => {
    console.log('Server running on the treadmill')
  });