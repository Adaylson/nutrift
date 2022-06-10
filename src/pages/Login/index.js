
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import './index.scss';
import { Link } from 'react-router-dom';


export default function IIndex() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate= useNavigate();

    async function entrarClick() {
        try { 
            const t = await axios.post('http://localhost:5000/login', {
            emailo: email,
            senha: senha
        });

            navigate('/adm');
        
        } catch (err) {
            if (err.response.status === 401) {

                setErro(err.response.data.erro);

            }
        
        }  
       
    }

    return(
    <main className="Main">
        
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
                    
                </div>
                <div className="Div-Button">
                    <Link to='../adm'><button className="botton" onClick={entrarClick} >ENTRAR</button></Link> 
                </div>

                
            </div>
        <div className='textsep'>Seja bem-vindo, novamente...</div>

    </main>
    )
}