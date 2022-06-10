import { Link } from 'react-router-dom';

import './index.scss';

export default function form() {
    return(

    <main className="page-container">
        <header className='cabecalho-page'>
            <div className='div-alinhar-logo'>
                <p className="nutrifit-text-header">NUTRIFIT</p>
                <div className="img-planta"></div>
            </div>
        </header>

        <div className='container1-cards'>
            <div className='img-card1'></div>
            <div className='imgesc-card1'></div>
            

            <div className='card2'>
                <div className='cabecalho-card2'>
                    <div className='alihar-cabecalho-card2'>
                        <div className='div-text-emissao-card2'>
                            <p className='dataEmissao-card2'>Data de Emissão: 00/00/0000</p>
                        </div>
                        <div className='div-titulo-cabecalho-card2'>
                            <h1 className='titulo-cabecalho-card2'>Informações do Paciente</h1>
                        </div>
                    </div>
                </div>

                <div className='div-inputs-infoPaciente'>
                    <div className='container1-inputs-infoPaciente'>
                        <div className='alinhar-textEinput-nome'>
                            <div className='text-input-nome'>Nome</div>
                            <div className='alinhar-input-nome'>
                                <input type="text" className='input-nome-infoPaciente' name="input Nome"/>  
                            </div>
                        </div>

                        <div className='alinhar-textEinput-email'>
                            <div className='text-input-email'>E-mail</div>
                            <div className='alinhar-input-email'>
                                <input type="text" className='input-email-infoPaciente' name="input email"/>
                            </div>
                        </div>
                        
                        <div className='alinhar-textEinput-cpf'>
                            <div className='text-input-cpf'>CPF</div>
                            <div className='alinhar-input-cpf'>
                                <input type="text" className='input-cpf-infoPaciente' name="input cpf"/>
                            </div>
                        </div>

                        <div className='alinhar-textEinput-peso'>
                            <div className='text-input-peso'>Peso</div>
                            <div className='alinhar-input-peso'>
                                <input type="text" className='input-peso-infoPaciente' name="input peso"/>
                            </div>
                        </div>
                    </div>

                    <div className='container2-inputs-infoPaciente'>
                        <div className='alinhar-textEinput-altura'>
                            <div className='text-input-altura'>Altura</div>
                            <div className='alinhar-input-altura'>
                                <input type="text" className='input-altura-infoPaciente' name="input Altura"/>
                            </div>
                        </div>

                        <div className='alinhar-textEinput-tipoFisico'>
                            <div className='text-input-tipoFisico'>Tipo Físico</div>
                            <div className='alinhar-input-tipoFisico'>
                                <input type="text" className='input-tipoFisico-infoPaciente' name="input Tipo fisico"/>
                            </div>
                        </div>
                        
                        <div className='alinhar-textEinput-telefone'>
                            <div className='text-input-telefone'>Telefone</div>
                            <div className='alinhar-input-telefone'>
                                <input type="text" className='input-telefone-infoPaciente' name="input telefone"/>
                            </div>
                        </div>

                        <div className='alinhar-textEinputs-genero'>
                            <div className='text-input-genero'>Gênero:</div>

                            <div className='div-inputEtext-masc'>
                                <div className='alinhar-input-masc'>
                                    <input type="radio" className='input-masc-infoPaciente' name="input Genero"/>
                                </div>
                                <div className='text-input-masc'>Masc</div>  
                            </div>

                            <div className='div-inputEtext-fem'>
                                <div className='alinhar-input-fem'>
                                    <input type="radio" className='input-fem-infoPaciente' name="input Genero"/>
                                </div>
                                <div className='text-input-fem'>Fem</div>  
                            </div>
                
                        </div>
                    </div>
                </div>
                    <div className='container-planodeNutricao'>
                        <div className='cabecalho2-card2'>
                            <div className='alinhar-titulo-cabecalho2'>
                                <h1 className='titulo-cabecalho2'>Plano de Nutrição</h1>
                            </div>
                         </div>

                        <div className='div-inputs-planodeNutricao'>
                            <div className='container1-inputs-planodeNutricao'>
                                <div className='alinhar-textEinput-objetivo'>
                                    <div className='text-input-objetivo'>Objetivo:</div>
                                    <div className='alinhar-input-objetivo'>
                                        <input type="text" className='input-objetivo-planodeNutricao' name="input Objetivo"/>
                                    </div>
                                </div>
                                <div className='alinhar-textEinput-estrategia'>
                                    <div className='text-input-estrategia'>Estratégia:</div>
                                    <div className='alinhar-input-estrategia'>  
                                        <input type="text" className='input-estrategia-planodeNutricao' name="input Estrategia"/>
                                    </div>
                                </div>
                            </div>
                            <div className='container2-inputs-planodeNutricao'>
                                <div className='text-input-habitosAlimentares'>Hábitos Alimentares</div>
                                <div className='alinhar-input-habitosAlimentares'>
                                    <input type="text" className='input-habitosAlimentares-planodeNutricao' name="input Habitos Alimentares"/>
                                </div>
                            </div>
                        </div>

                        <div className='alinhar-button-salvar'>
                            <div className='button-salvar'>Salvar</div>
                        </div>
                    </div>
            </div>
        </div>
        
    </main>

    )
}    