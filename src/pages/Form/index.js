import { Link } from 'react-router-dom';

import './index.scss';

export default function form() {
    return(
        <main className="page-container">

        <div className="cabecalho">
            <div className="alinhar-cabecalho">
                <div><Link to='../home' className='home'>HOME</Link> </div> |
                <div>CONTATO</div> |
                <div>SOBRE NÓS</div>
            </div>
        </div>

            <div className="container-cards">
                <div className="sub-container-cards">
                <div className="container-card-infoPaciente">
                    <div className="sub-container-infoPaciente">
                        <div className="div-text-InfoPaciente">
                            <h2>Informações do Paciente</h2>
                        </div>
                        <div className="div-inputs-infoPaciente">
                            <div className="div-input-nome">
                                <label for="nomeCompleto"></label>
                                <input type="text" className="input-NomeCompleto" name="nomeCompleto"/>
                            </div>
                            <div className="div-input-email">email</div>
                            <div className="div-input-cpf">cpf</div>
                            <div className="div-input-peso">peso</div>
                            <div className="div-input-altura">altura</div>
                            
                            <div className="div-genero">
                                <div className="divAlinhar-masc">
                                    <div className="checkbox-masc">
                                        radio
                                    </div>
                                    <div className="text-masc">
                                    masc
                                    </div>

                                    <div className="divAlinhar-fem">
                                        <div className="checkbox-fem">
                                            radio
                                        </div>
                                        <div className="text-fem">
                                            fem
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="div-input-tipoFisico">tipo fisico</div>
                            <div className="div-input-telefone">telefone</div>
                        </div>
                    </div>
                </div>

            <div className="container-card-planoNutricao">
                <div className="sub-container-planoNutricao">
                    <div className="div-text-planoNutricao">
                        <h1>PLANO DE NUTRIÇÃO</h1>
                    </div>

                    <div className="div-inputsP-planoNutricao">
                        <div className="input-objetivo">ojetivo</div>
                        <div className="input-valor-consulta">val consulta</div>
                    </div>

                    <div className="input-observacoes">observacoes</div>
                    <div className="input-estrategia">estrategia</div>
                    <div className="btn-PlanoNutricao">Concluído</div>
                </div>
            </div>
        </div>
    </div>
    </main>
    )
}    