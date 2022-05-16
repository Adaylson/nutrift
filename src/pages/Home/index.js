import { Link } from 'react-router-dom';
import './index.scss';

export default function home() {
    return(
        <main className='page-home'>
                <div className='cont-main-faixa1'>
                    <div className='cont-f1'>
                        <Link to='/login' className='link-login'>Login</Link>
                        <Link to='/objetivo' className='link-objetivo'>Nosso Objetivo</Link>
                        <Link to='/contato' className='link-contato'>Contato</Link>
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
                        <div className='img-f3'>
                            
                        </div>
                    </div>
                </div>

        </main>
    )
}