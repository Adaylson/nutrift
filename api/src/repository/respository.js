import { con } from "./connection.js";


//inserir consulta ###################################################################################


export async function inserirConsulta(consul){
    const comando = `
    INSERT INTO tb_consulta (nm_nome, ds_cpf, dt_nascimento, ds_emailpaciente, ds_contato, ds_genero, vl_altura, vl_peso, ds_fisico, ds_objetivo, ds_habitos, ds_estrategia, dt_criacao)
    VALUES                  ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [consul.nome, consul.cpf, consul.nascimento, consul.email, consul.contato, consul.genero, consul.altura, consul.peso, consul.fisico, consul.objetivo, consul.formularios, consul.estrategia, consul.criacao]);
    return resposta[0];

}

//alterar consulta ###################################################################################

export async function alterarConsulta(consul){
    const comando =  `
    UPDATE tb_consulta
    SET 
        nm_nome             ='?',
        ds_cpf              ='?',
        dt_nascimento       ='?',
        ds_emailpaciente    ='?',
        ds_contato          ='?',
        ds_genero           ='?',
        vl_altura           = ?,
        vl_peso             = ?,
        ds_fisico           ='?',
        ds_objetivo         ='?',
        ds_habitos          ='?',
        ds_estrategia       ='?',
        dt_criacao          ='?'
     WHERE id_consulta      ='?'
    `

    const [resp] = await con.query(comando, [consul.nome, consul.cpf, consul.nascimento, consul.email, consul.contato, consul.genero, consul.altura, consul.peso, consul.fisico, consul.objetivo, consul.formularios, consul.estrategia, consul.criacao, consul.id]);
    return resp[0];
}

//listar consultas ###################################################################################


export async function listarConsultas(){
    const comando = `
    SELECT id_consulta          id,
           nm_nome              nome,
           ds_cpf               cpf,
           dt_nascimento        nascimento,
           ds_emailpaciente     emailpaciente,
           ds_contato           contato,
           ds_genero            genero,
           vl_altura            altura,
           vl_peso              peso,
           ds_fisico            fisico
      FROM tb_consulta;`;

    const [consulta] = await con.query(comando);
    return consulta;
} 

//listar consulta por id ###################################################################################


export async function listarConsultasid(id){
    const comando = `
    SELECT id_consulta          id,
           nm_nome              nome,
           ds_cpf               cpf,
           dt_nascimento        nascimento,
           ds_emailpaciente     emailpaciente,
           ds_contato           contato,
           ds_genero            genero,
           vl_altura            altura,
           vl_peso              peso,
           ds_fisico            fisico
      FROM tb_consulta
     WHERE id_consulta          =?`;

    const [consulta] = await con.query(comando, [id]);
    return consulta[0];
} 

//listar consulta por nome ###################################################################################


export async function listarConsultasnome(nome){
    const comando = `
    SELECT id_consulta          id,
           nm_nome              nome,
           ds_cpf               cpf,
           dt_nascimento        nascimento,
           ds_emailpaciente     emailpaciente,
           ds_contato           contato,
           ds_genero            genero,
           vl_altura            altura,
           vl_peso              peso,
           ds_fisico            fisico
      FROM tb_consulta
     WHERE nm_nome              like ?`;

    const [consulta] = await con.query(comando, [ `%${nome}%` ]);
    return consulta;
} 