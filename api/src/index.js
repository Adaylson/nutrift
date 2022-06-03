import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { con } from './repository/connection.js'
import userController from './controller/controller.js'

const server = express();
server.use(cors());
server.use(express.json());


//Config endpoint 
server.use(userController);



server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT} `));