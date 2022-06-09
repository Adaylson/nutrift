import { con } from './connection.js'

export async function login(email, senha ){
    const comando = `
    select id_login         id,
    nm_usuario              nome,
    ds_email                email
    from                    tb_login
    where                   ds_email = '?'
    and                     ds_senha = '?';
    `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}

