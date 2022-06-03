import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userController from './controller/usercontroller.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(userController);



server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT} `));