import { Router } from 'express';
import { alterarConsulta, inserirConsulta } from '../repository/respository.js'; 

const server = Router();

server.post('/consulta', async (req, resp) => {
    try{
        const a = req.body;

        const c = await inserirConsulta(a);

        resp.send(c)

    }catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/consulta', async (req, resp) => {
    try{
        const a = req.body

        const b = alterarConsulta(a);

        resp.send(b)
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })


    }


})

export default server;

