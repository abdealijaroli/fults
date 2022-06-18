import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;


app.use(cors());

app.get('/', (req, res) => {
   res.send(`hello world`)
})

app.listen(port, ()=> {
   console.log('listening on port 5000')
});