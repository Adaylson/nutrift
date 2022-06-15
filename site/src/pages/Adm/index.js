import storage from 'local-storage'

import { useNavigate } from 'react-router-dom';

import './index.scss';

import { Link } from 'react-router-dom';
import { removerConsulta, listarConsultas } from '../../api/consultaApi';
import React, {useEffect, useState} from 'react'

export default function Index() {

    const [consulta, setConsulta] = useState([]);

    function calcularIdade(nasc){
        nasc = new Date(nasc);
        let hoje = new Date();
        
        let idade = -1;
        while (hoje > nasc) {
            idade++;
            nasc.setFullYear(nasc.getFullYear() + 1);
        }
        return idade;
    }


    async function removerConsultaClick(id){
        const resposta = await removerConsulta(id);
        alert('Consulta removido')

        listarTodasConsultas();
    }
    
    async function listarTodasConsultas(){
        const resposta = await listarConsultas();
        console.log(resposta);
        setConsulta(resposta) 
    }

    
    useEffect(() => {
        listarTodasConsultas()
        console.log(consulta)
    }, [])

    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/login');
    }

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/login');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
        }
        
    }, [])

    return(
        <main className='page-adm'>
            <header>
                <p>Bem vindo user7754</p>
                <Link to='../home' className='home'>HOME</Link>
                <img src="/assets/images/magnifying-glass-svgrepo-com 1.svg" alt="buscar" className='lupa'/>
            </header>

            <main>

                <div className="menu">
                <div className='img-planta'></div>
                
                <p className='nutrifit-text'>NUTRIFIT</p>
                    <Link to='../home' className='cadastro'>HOME</Link>
                    <Link to='../form' className='cadastro'>Cadastrar</Link>
                    <div className='div-sair' onClick={sairClick} >Sair</div>
                </div>

                <div className="areacard">
                    <div className="agrupar2cards">
                        {consulta.map(item=>
                            <div className="Card">
                                <div className="aling1">
                                    <div className="agrup1">
                                        <p>Nome: {item.nome}</p>
                                        <p>idade: {calcularIdade(item.nascimento)}</p>
                                        <div className="alturaxpeso">
                                            <p>altura: {item.altura}</p>
                                            <p className="peso">Peso: {item.peso}</p>
                                        </div>
                                        <p>Objetivo: {item.objetivo}</p>
                                        <p>Criado: {item.criado.substr(0, 10)}</p>
                                        <p className="p">Em Processo....</p>
                                    </div>
                                    <div className="agrup2">
                                        <div className="icons">
                                            <img src="/assets/images/iconmonstr-trash-can-5 1.svg" alt="Remover" onClick={()=>removerConsultaClick(item.id)}/>
                                            <div className="f"></div>
                                            <img src="/assets/images/iconmonstr-pencil-4 2.svg" alt="Editar"/> 
                                        </div>
                                        <p>Nº {item.id}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </main>
        </main>
    )
}
