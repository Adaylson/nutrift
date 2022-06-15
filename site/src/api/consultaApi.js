import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5001'
})

export async function cadastrarCliente(nome, emailpaciente, cpf, peso, objetivo, estrategia, altura, fisico, telefone, genero, habitos, criacao, nascimento, usuario){
    const resposta = await api.post('/consulta', {
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        emailpaciente: emailpaciente,
        contato: telefone,
        genero: genero ? 'Feminino' : 'Masculino',
        altura: altura,
        peso: peso,
        fisico: fisico,
        objetivo: objetivo,
        habitos: habitos,
        estrategia: estrategia,
        usuario: usuario
    })

    return resposta.data;
}


export async function listarConsultas(){
    const resposta = await api.get('/consultar');
    return resposta.data;
}

export async function alterarCliente(id, nome, emailpaciente, cpf, peso, objetivo, estrategia, altura, fisico, telefone, genero, habitos, criacao, nascimento, usuario){
    const resposta = await api.put(`/consulta/${id}`, {
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        emailpaciente: emailpaciente,
        contato: telefone,
        genero: genero ? 'Feminino' : 'Masculino',
        altura: altura,
        peso: peso,
        fisico: fisico,
        objetivo: objetivo,
        habitos: habitos,
        estrategia: estrategia,
        usuario: usuario
    })

    return resposta.data;
}


export async function removerConsulta(id){
    const resposta = await api.delete(`/deletar/${id}`);
    return resposta.status;
}

