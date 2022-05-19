import './index.scss';
import { Link } from 'react-router-dom';



export default function adm() {
    return(
        <main className='page-adm'>
            <header>
                <p>Bem vindo user7754</p>
                <Link to='../home'>HOME</Link>
                <img src="/assets/images/magnifying-glass-svgrepo-com 1.svg" alt="buscar"/>
            </header>

            <main>

                <div className="menu">
                    <Link to='../cadastro'>Adicionar Consulta</Link>
                </div>

                <div className="areacard">
                    <div className="agrupar2cards">
                        <div className="Card">
                            <div className="aling1">
                                <div className="agrup1">
                                    <p>Nome: João</p>
                                    <p>idade: 57</p>
                                    <div className="alturaxpeso">
                                        <p>altura: 1,64</p>
                                        <p className="peso">Peso: 75kg</p>
                                    </div>
                                    <p>Objetivo</p>
                                    <p className="p">Em Processo....</p>
                                </div>
                                <div className="agrup2">
                                    <div className="icons">
                                        <img src="/assets/images/iconmonstr-trash-can-5 1.svg" alt="Remover"/>
                                        <div className="f"></div>
                                        <img src="/assets/images/iconmonstr-pencil-4 2.svg" alt="Editar"/>
                                    </div>
                                    <p>N°456</p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="aling1">
                                <div className="agrup1">
                                    <p>Nome: João</p>
                                    <p>idade: 57</p>
                                    <div className="alturaxpeso">
                                        <p>altura: 1,64</p>
                                        <p className="peso">Peso: 75kg</p>
                                    </div>
                                    <p>Objetivo</p>
                                    <p className="p">Em Processo....</p>
                                </div>
                                <div className="agrup2">
                                    <div className="icons">
                                        <img src="/assets/images/iconmonstr-trash-can-5 1.svg" alt="Remover"/>
                                        <div className="f"></div>
                                        <img src="/assets/images/iconmonstr-pencil-4 2.svg" alt="Editar"/>
                                    </div>
                                    <p>N°456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agrupar2cards">
                        <div className="Card">
                            <div className="aling1">
                                <div className="agrup1">
                                    <p>Nome: João</p>
                                    <p>idade: 57</p>
                                    <div className="alturaxpeso">
                                        <p>altura: 1,64</p>
                                        <p className="peso">Peso: 75kg</p>
                                    </div>
                                    <p>Objetivo</p>
                                    <p className="p">Em Processo....</p>
                                </div>
                                <div className="agrup2">
                                    <div className="icons">
                                        <img src="/assets/images/iconmonstr-trash-can-5 1.svg" alt="Remover"/>
                                        <div className="f"></div>
                                        <img src="/assets/images/iconmonstr-pencil-4 2.svg" alt="Editar"/>
                                    </div>
                                    <p>N°456</p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="aling1">
                                <div className="agrup1">
                                    <p>Nome: João</p>
                                    <p>idade: 57</p>
                                    <div className="alturaxpeso">
                                        <p>altura: 1,64</p>
                                        <p className="peso">Peso: 75kg</p>
                                    </div>
                                    <p>Objetivo</p>
                                    <p className="p">Em Processo....</p>
                                </div>
                                <div className="agrup2">
                                    <div className="icons">
                                        <img src="/assets/images/iconmonstr-trash-can-5 1.svg" alt="Remover"/>
                                        <div className="f"></div>
                                        <img src="/assets/images/iconmonstr-pencil-4 2.svg" alt="Editar"/>
                                    </div>
                                    <p>N°456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </main>
    )
}