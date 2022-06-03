import { cors } from './connection.js'

export async function login(email, senha ){

    const comando = ``

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];

    

}