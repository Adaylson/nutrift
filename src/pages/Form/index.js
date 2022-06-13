import { useState } from 'react';
import { cadastrarCliente } from '../../api/consultaApi'
import storage from 'local-storage';

import './index.scss';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {
    const [nome, setNome] = useState('');
    const [email, setemail] = useState('');
    const [cpf, setCpf] = useState('');
    const [peso, setPeso] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [estrategia, setEstrategia] = useState('');
    const [altura, setAltura] = useState(0);
    const [fisico, setFisico] = useState(0);
    const [telefone, setTelefone] = useState('');
    const [genero1, setGenero1] = useState('');
    const [genero, setGenero] = useState('');
    const [habitos, setHabitos] = useState('');


    async function Salvar(){
        try{

            const usuario = storage('usuario-logado').id;

            const r = await cadastrarCliente(nome, email, cpf, peso, objetivo, estrategia, altura, fisico, telefone, genero, habitos, usuario);

            toast('Cliente cadastrado');
        }catch(err){
            toast.error(err.message)
        }

    }

    return(

    <main className="page-container">
         <ToastContainer />
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
                                <input type="text" className='input-nome-infoPaciente' name="input Nome" value={nome} onChange={e => setNome(e.target.value)}/>  
                            </div>
                        </div>

                        <div className='alinhar-textEinput-email'>
                            <div className='text-input-email'>E-mail</div>
                            <div className='alinhar-input-email'>
                                <input type="text" className='input-email-infoPaciente' name="input email" value={email} onChange={e => setemail(e.target.value)}/>
                            </div>
                        </div>
                        
                        <div className='alinhar-textEinput-cpf'>
                            <div className='text-input-cpf'>CPF</div>
                            <div className='alinhar-input-cpf'>
                                <input type="text" className='input-cpf-infoPaciente' name="input cpf" value={cpf} onChange={e => setCpf(e.target.value)}/>
                            </div>
                        </div>

                        <div className='alinhar-textEinput-peso'>
                            <div className='text-input-peso'>Peso</div>
                            <div className='alinhar-input-peso'>
                                <input type="text" className='input-peso-infoPaciente' name="input peso" value={peso} onChange={e => setPeso(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className='container2-inputs-infoPaciente'>
                        <div className='alinhar-textEinput-altura'>
                            <div className='text-input-altura'>Altura</div>
                            <div className='alinhar-input-altura'>
                                <input type="text" className='input-altura-infoPaciente' name="input Altura" value={altura} onChange={e => setAltura(e.target.value)}/>
                            </div>
                        </div>

                        <div className='alinhar-textEinput-tipoFisico'>
                            <div className='text-input-tipoFisico'>Tipo Físico</div>
                            <div className='alinhar-input-tipoFisico'>
                                <input type="text" className='input-tipoFisico-infoPaciente' name="input Tipo fisico" value={fisico} onChange={e => setFisico(e.target.value)}/>
                            </div>
                        </div>
                        
                        <div className='alinhar-textEinput-telefone'>
                            <div className='text-input-telefone'>Telefone</div>
                            <div className='alinhar-input-telefone'>
                                <input type="text" className='input-telefone-infoPaciente' name="input telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                            </div>
                        </div>

                        <div className='alinhar-textEinputs-genero'>
                            <div className='text-input-genero'>Gênero:</div>

                            <div className='div-inputEtext-masc'>
                                <div className='alinhar-input-masc'>
                                    <input type="checkbox" className='input-masc-infoPaciente' name="input Genero" checked={genero1} onChange={e => setGenero1(e.target.checked)}/>
                                </div>
                                <div className='text-input-masc'>Masc</div>  
                            </div>

                            <div className='div-inputEtext-fem'>
                                <div className='alinhar-input-fem'>
                                    <input type="checkbox" className='input-fem-infoPaciente' name="input Genero" checked={genero} onChange={e => setGenero(e.target.checked)}/>
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
                                        <input type="text" className='input-objetivo-planodeNutricao' name="input Objetivo" value={objetivo} onChange={e => setObjetivo(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='alinhar-textEinput-estrategia'>
                                    <div className='text-input-estrategia'>Estratégia:</div>
                                    <div className='alinhar-input-estrategia'>  
                                        <input type="text" className='input-estrategia-planodeNutricao' name="input Estrategia" value={estrategia} onChange={e => setEstrategia(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='container2-inputs-planodeNutricao'>
                                <div className='text-input-habitosAlimentares'>Hábitos Alimentares</div>
                                <div className='alinhar-input-habitosAlimentares'>
                                    <input type="text" className='input-habitosAlimentares-planodeNutricao' name="input Habitos Alimentares" value={habitos} onChange={e => setHabitos(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='alinhar-button-salvar' >
                            <button onClick={Salvar} className='button-salvar'>Salvar</button>
                        </div>
                    </div>
            </div>
        </div>
        
    </main>

    )
}    