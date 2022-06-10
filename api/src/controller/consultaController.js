import { Router } from 'express';
import { alterarConsulta, buscarCpf, deletar, inserirConsulta, listarConsultas, listarConsultasid, listarConsultasnome } from '../repository/consultaRespository.js'; 

const server = Router();



//inserir consulta ###################################################################################

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


//alterar consulta ###################################################################################

server.put('/consulta/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const consulta = req.body;

        const b = await alterarConsulta(id, consulta);

        resp.status(204).send();
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


//listar consulta ###################################################################################

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


//listar consulta por nome ###################################################################################

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


//listar consulta por id ###################################################################################

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

//deletar consulta ###################################################################################

server.delete('/deletar/:id', async (req, resp) =>{
    try{
        const { id } = req.params;

        const resposta = await deletar(id);
        if(resposta != 1)
            throw new Error('Consulta não encontrada')

        resp.status(204).send();
    }   catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})



// consulta cpf ############################################################################################

server.get('/consulta2/:cpf', async (req, resp) => {
        try{
            const { cpf } = req.params.cpf;

            const resposta = await buscarCpf(cpf);

            resp.send(resposta);

        }catch(err){
            resp.status(400).send({
                erro: err.message
            })
        }
    }
)

export default server;

