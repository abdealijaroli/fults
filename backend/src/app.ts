import './config/loadEnv'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import index from './routes/index'
import { dbConnect } from './db/connect'
dbConnect()

const app: Express = express()

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/tasks', index)

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
});


