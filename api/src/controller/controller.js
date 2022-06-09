import { Router } from 'express';
import { inserirConsulta } from '../repository/respository.js'; 

const server = Router();

server.post('/consulta', async (req, resp) => {
    try{
        const {nome, cpf, nascimento, email, contato, genero, altura, peso, fisico, objetivo, formularios, estrategia, criacao} = req.body

        const c = await inserirConsulta(nome, cpf, nascimento, email, contato, genero, altura, peso, fisico, objetivo, formularios, estrategia, criacao)

        resp.send(c)

    }catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server

