import './index.scss';
import { Link } from 'react-router-dom';


export default function login() {
    return(
    <main className="Main">
        
    <div className='branco'> 
        <h1 className="logintext"> LOGIN </h1>

        <div className="Div-Imputs">
                    
            <div className="Div-Label">
           <label for="usuario" className='user'> USUÁRIO : </label>
                        <div className="espac4"></div>
                    </div>
                    
                    <input type="text" className="input-usuario" name="usuario"/>
                   
                    <div className="Div-Label">
                        <label for="usuario" className='senha'> SENHA : </label>
                        
                    </div>
                    
                    <input type="password" className="input-usuario" name="usuario"/>
                    
                    <div className="Div-Label2">
                        <label className="Label-Esqueceu" for="usuario">ESQUECEU A SENHA ?</label>
        
                    </div>
                </div>
                <div className="Div-Button">
                    <Link to='../adm'><button className="botton">ENTRAR</button></Link> 
                </div>

                
            </div>
        <div className='textsep'>Seja bem-vindo, novamente...</div>

    </main>
    )
}