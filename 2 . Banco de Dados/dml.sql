USE nutrifit;


INSERT INTO tb_login (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'nutri@admin.com.br', '1234');




select id_login         id,
       nm_usuario       nome,
       ds_email         email
  from tb_login
 where ds_email         ='nutri@admin.com.br'
   and ds_senha         ='1234';



-- nova consulta
  INSERT INTO tb_consulta (id_consulta, nm_nome, ds_cpf, dt_nascimento, ds_emailpaciente, ds_contato, ds_genero, vl_altura, vl_peso, ds_fisico, ds_objetivo, ds_habitos, ds_estrategia, dt_criacao)
      VALUES (1, 'Adaylson Arcanjo', '32454435', '2004-03-15', 'adaylsonarcanjo@gmail.com', '5675334', 'masculino', 1.70, 70, 'sei la', 'teste', 'teste', 'teste', '2022-06-03');


-- alterar consulta
UPDATE tb_consulta
   SET nm_nome          ='',
    ds_cpf              ='',
    dt_nascimento       ='1111-11-11',
    ds_emailpaciente    ='',
    ds_contato          ='',
    ds_genero           ='',
    vl_altura           =0,
    vl_peso             =0,
    ds_fisico           ='',
    ds_objetivo         ='',
    ds_habitos          ='',
    ds_estrategia       ='',
    dt_criacao          ='1111-11-11'
 WHERE id_consulta = 1;




-- remover consulta
DELETE FROM tb_consulta 
      WHERE id_consulta = 1;




--  consultar       
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
  FROM tb_consulta;
  
-- Cconsultar por CPF
SELECT id_consulta          id,
       nm_nome              nome,
       ds_cpf               cpf,
       dt_nascimento        nascimento,
       ds_emailpaciente     emailpaciente,
       ds_contato           contato,
       ds_genero            genero,
       vl_altura            altura,
       vl_peso              peso,
       ds_fisico            fisico,
       ds_objetivo          objetivo,
        ds_habitos          habitos,
        ds_estrategia       estrategi,
        dt_criacao          criacao
  FROM tb_consulta
 WHERE ds_cpf           	like '%a%';
 