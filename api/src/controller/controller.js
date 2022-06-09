import { Router } from 'express';
import { alterarConsulta, inserirConsulta, listarConsultas, listarConsultasid, listarConsultasnome } from '../repository/respository.js'; 

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

server.get('/consultar', async (req, resp) =>{
    try{
        const resposta = await listarConsultas();

        resp.send(resposta);

    }   catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/consultar/nome', async (req, resp) =>{
    try{
        const { nome } = req.query;
        const resposta = await listarConsultasnome(nome);

        resp.send(resposta);

    }   catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/consultar/:id', async (req, resp) =>{
    try{
        const { id } = req.params;
        const resposta = await listarConsultasid(id);

        resp.send(resposta);

    }   catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})



export default server;

