import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5001'
})

export async function cadastrarCliente(nome, email, cpf, peso, objetivo, estrategia, altura, fisico, telefone, genero, habitos, criacao, nascimento, usuario){
    const resposta = await api.post('/consulta', {
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        email: email,
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