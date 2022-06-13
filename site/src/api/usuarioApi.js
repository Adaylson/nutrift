import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5001'
})


export async function login(email, senha) {

    const t = await api.post('/login', {
        email: email,
        senha: senha
    });

    return t.data;
}