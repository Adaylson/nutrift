
import { login } from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react'

import './index.scss';
import { Link } from 'react-router-dom';


export default function IIndex() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);


    const navigate= useNavigate();
    const ref = useRef(); 

    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try { 

        const t = await login(email, senha);

        setTimeout(( ) => {
            navigate('/adm');
        }, 3000);
        
        } catch (err) {
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {

                setErro(err.response.data.erro);

            }
        
        }  
       
    }

    return(
    <main className="Main">
        <LoadingBar color='#f11946' ref={ref} />
        
    <div className='branco'> 


        <h1 className="logintext"> LOGIN </h1>

        <div className="Div-Imputs">
                    
            <div className="Div-Label">
           <label for="usuario" className='user'> USUÁRIO : </label>
                        <div className="espac4"></div>
                    </div>
                    
                    <input type="text" className="input-usuario" name="usuario" value={email} onChange={e => setEmail(e.target.value) }  />
                   
                    <div className="Div-Label">
                        <label for="usuario" className='senha'> SENHA : </label>
                        
                    </div>
                    
                    <input type="password" className="input-usuario" name="usuario" value={senha} onChange={e => setSenha(e.target.value) } />
                    
                    <div className='text-invalid'>
                        {erro}
                    </div>

                </div>
                <div className="Div-Button">
                    <button className="botton" onClick={entrarClick} disabled={carregando}>ENTRAR</button> 
                </div>


                
            </div>
        <div className='textsep'>Seja bem-vindo!!</div>

    </main>
    )
}