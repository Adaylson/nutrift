
// import { con } from './repository/connection.js'
export async function login(email, senha ){

    const comando = `
    
    `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}