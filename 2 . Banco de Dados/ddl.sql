create database nutrifit;

use nutrifit;

create table tb_login(
    id_login         int primary key auto_increment,
    nm_usuario       varchar(200),
    ds_email         varchar(200),
    ds_senha         varchar(20)
);


create table tb_consulta(
    id_consulta            int primary key auto_increment,
    nm_nome             varchar(200),
    ds_cpf              varchar(14),
    dt_nascimento       datetime,
    ds_emailpaciente      varchar(200),
    ds_contato          varchar(200),
    ds_genero           varchar(9),
    vl_altura           decimal(10,2),
    vl_peso             decimal(10,2),
    ds_fisico           varchar(200),
    ds_objetivo            varchar(200),
    ds_habitos             varchar(1000),
    ds_estrategia          varchar(1000),
    dt_criacao             datetime
);