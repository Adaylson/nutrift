import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userController from './controller/usercontroller.js'
import Controller from './controller/controller.js'

const server = express();
server.use(cors());
server.use(express.json());

//endpoints
server.use(userController);
server.use(Controller);



server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT} `));