import { con } from "./connection.js";


export async function inserirConsulta(consul){
    const comando = `
    INSERT INTO tb_consulta (nm_nome, ds_cpf, dt_nascimento, ds_emailpaciente, ds_contato, ds_genero, vl_altura, vl_peso, ds_fisico, ds_objetivo, ds_habitos, ds_estrategia, dt_criacao)
    VALUES                  ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [consul.nome, consul.cpf, consul.nascimento, consul.email, consul.contato, consul.genero, consul.altura, consul.peso, consul.fisico, consul.objetivo, consul.formularios, consul.estrategia, consul.criacao])
    return resposta[0];

}