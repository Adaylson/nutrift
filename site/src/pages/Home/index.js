import { Link } from 'react-router-dom';
import './index.scss';

export default function home() {
    return(
        <main className='page-home'>
                <div className='cont-main-faixa1'>
                    <div className='cont-f1'>
                        <Link to='/login' className='link-login'>Login</Link>
                        <a href='#bottom' className='link-objetivo'>Nosso Objetivo</a>
                        <a href='#botom' className='link-contato'>Contato</a>
                    </div>
                    <div className='cont2-f1'>
                        <p className='nutrifit-text'>NUTRIFIT</p>
                        <div className='img-planta'></div>
                    </div>
                </div>
                <div className='cont-main-faixa2'>
                    <div className='cont-f2'>
                        <div className='img-fundo'></div>
                        <div className='img-f2'>

                        </div>
                    </div>
                    <div className='cont2-f2'>
                        <p className='text1-f2'> 
                        Primeiro mude sua alimentação  e depois a alimentação mudará você
                        </p>
                        <p className='text2-f2'>
                            Cada paciente tem sua história, seu tempo disponível e seus gostos <br/> alimentares,<br/>
                            assim, a estratégia da consultoria nutricional é 100% personalizada,<br/>
                            não trabalhamos complanos alimentares `pré-prontos`` na consulta, o <br/> cardápio é feito para <br/>
                            cada paciente!
                        </p>
                        <p className='text3-f2'>
                        Quem disse que dieta não pode ser gostosa de seguir?<br/>
                        Realizamos cardápios saudáveis e atrativos nos planos nutricionais,<br/>
                        de olho nas metas corporais dos pacientes (exemplo, os que procuram<br/>
                        nutricionista para emagrecer ou adeptos<br/>
                        de musculação para ganho de massa magra).
                        </p>

                    </div>
                </div>
                <div className='cont-main-faixa3'>
                    <div className='cont-f3'>
                        <p className='text-f3'>
                        A alimentação adequada e saudável é a <br/> chave para a longevidade.<br/>
                        Por isso, desenhamos o plano de<br/> Reeducação Alimentar conforme suas<br/> necessidades nutricionais e respeitando <br/> suas preferências alimentares.
                        </p>
                    </div>
                    <div className='cont2-f3'>
                        <div className='img-f3'></div>
                    </div>
                </div>
                <div id='bottom' className='cont-main-faixa4'>
                    <div className='cont-f4'>
                        <div className='img-f4'></div>
                        <p className='text-f4'>
                        A alimentação adequada e <br/>
                        saudável é a chave para a<br/>
                        longevidade.<br/>
                        Por isso, desenhamos o<br/>
                        plano de Reeducação <br/>
                        Alimentar conforme suas <br/>
                        necessidades nutricionais e<br/>
                        respeitando suas <br/>
                        preferências alimentares.
                        </p>
                        <div className='img2-f4'></div>
                        <p className='text2-f4'>
                        Sou nutricionista formada <br/>
                        desde 2011. Pós-graduada em  <br/>
                        Nutrição Clínica com <br/>
                        Especialização em Nutrição<br/>
                        Esportiva, Funcional <br/>
                        e Emagrecimento.“Coach de<br/> 
                        Emagrecimento”.
                        </p>
                    </div>
                    <div className='cont2-f4'>
                        <p className='text3-f4'>
                        Através do exame de <br/> 
                        bioimpedância e avaliação <br/> 
                        física, traçaremos o plano <br/> 
                        alimentar para atingir os <br/>
                        níveis de gordura corporal e <br/>
                        de massa muscular <br/>
                        adequados para sua saúde e <br/> 
                        autoestima.
                        </p>
                        <div className='img3-f4'></div>
                        <p className='text4-f4'>
                        Comer saudável pode <br/> 
                        prevenir e tratar doenças. A <br/>
                        falta ou excesso de nutrientes <br/> 
                        podem levar a um <br/> 
                        desequilíbrio causando <br/> 
                        problemas de saúde como <br/> 
                        hipertensão, diabetes e <br/>
                        outros. Ajustamos sua <br/> 
                        alimentação com saúde.
                        </p>
                        <div className='img4-f4'></div>
                    </div>
                </div>
                <div className='cont-main-rodape'>
                    <div className='cont-rodape'>
                        <h1 className='titulo-cont1'>
                            Missão
                        </h1>
                        <p className='text-cont1'>
                        Aumentar a saúde e o bem estar dos <br/> 
                        pacientes através de uma orientação <br/> 
                        nutricional personalizada.<br/>
                        Entregar um serviço que possibilite <br/> 
                        alcançar suas metas e objetivos, <br/> 
                        transformando seu corpo e sua<br/>  
                        autoestima.
                        </p>
                    </div>
                    <div className='cont2-rodape'>
                        <h1 className='titulo-cont2'>
                            Benefícios
                        </h1>
                        <p className='text3-cont1'>
                            Baixo Investimento
                        </p>
                        <p className='text3-cont1'>
                            Grandes Resultados
                        </p>
                        <p className='text3-cont1'>
                            Nutricionista Online
                        </p>
                        <p className='text2-cont1'>
                            Receitas Especiais
                        </p>
                    </div>
                    <div className='cont3-rodape'>
                        <h1 className='titulo-cont3'>
                            Contato
                        </h1>
                        <p id='botom' className='text-cont3'>
                        Email:<br/> 
                        consulta@nutrifit.com.br<br/> 
                        Telefone:(11) 9-9801-0101
                        </p>
                        <p className='text2-cont3'>
                        Endereço:<br/> 
                        Avenida Dr. Cardoso de Mello, 1666, 1º<br/> 
                        Andar, Vila Olímpia, <br/> 
                        São Paulo – SP.CEP: 04548-000.
                        </p>
                        <div className='cont-c3-rodape'>
                        <svg className='img-tw' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C6.2685 0 0 6.2685 0 14C0 21.7315 6.2685 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0ZM21.077 11.2525C21.2905 15.9658 17.7753 21.2205 11.5523 21.2205C9.66 21.2205 7.8995 20.6652 6.41667 19.7143C8.19467 19.9243 9.96917 19.4297 11.3773 18.3272C9.912 18.3003 8.67417 17.3308 8.246 15.9997C8.77217 16.1 9.29017 16.0708 9.76033 15.9425C8.14917 15.6182 7.03617 14.1668 7.07233 12.614C7.525 12.8648 8.04067 13.0153 8.59017 13.0328C7.098 12.0353 6.67567 10.0648 7.553 8.55867C9.205 10.5863 11.6748 11.9198 14.4597 12.0598C13.9708 9.9645 15.561 7.945 17.7252 7.945C18.6877 7.945 19.5592 8.35217 20.1705 9.00317C20.9335 8.85383 21.6522 8.57383 22.2985 8.19C22.0477 8.97283 21.5168 9.6285 20.825 10.0438C21.5028 9.96217 22.1492 9.7825 22.7488 9.51533C22.3008 10.1897 21.7338 10.78 21.077 11.2525Z" fill="#737373"/>
                        </svg>
                        
                        <svg  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C6.2685 0 0 6.2685 0 14C0 21.7315 6.2685 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0ZM17.5 9.33333H15.925C15.2973 9.33333 15.1667 9.59117 15.1667 10.241V11.6667H17.5L17.2562 14H15.1667V22.1667H11.6667V14H9.33333V11.6667H11.6667V8.974C11.6667 6.91017 12.7528 5.83333 15.2005 5.83333H17.5V9.33333Z" fill="#737373"/>
                        </svg>
                    </div>
                    </div>
                </div>
        </main>
    )
}