import './index.scss';
import { Link } from 'react-router-dom';


export default function login() {
    return(
        <div className="Main">
        <section className="Faixa-1">
            <div>
                <a href="###">
                <img className="F1-Img" src="/assets/images/Screenshot_1.png" alt=""/>
                </a>
            </div>
            <div> <Link to="/home" className="F1-Home">Home</Link></div>
            <div className="espac"></div>
        </section>
        
        <section className="FAIXA-FANTASMA"></section>

        <section className="Faixa-2">

            <div className="F2-Card"> 

                    <div className="div-img">
                        <img className="img" src="/assets/images/Group.png" alt=""/>
                    </div>

                <div className="espac1"></div>
                <div className="espac3"></div>
                <div className="Div-Login">
                    <h1 className="Loginzin"> LOGIN </h1>
                </div>
                <div className="espac2"></div>
                
                <div className="Div-Imputs">
                    
                    <div className="Div-Label">
                        <label for="usuario"> USUÁRIO : </label>
                        <div className="espac4"></div>
                    </div>
                    
                    <input type="text" className="input-usuario" name="usuario"/>
                    <div className="espac3"></div>
                   
                    <div className="Div-Label">
                        <label for="usuario"> SENHA : </label>
                        <div className="espac4"></div>
                    </div>
                    
                    <input type="password" className="input-usuario" name="usuario"/>
                    
                    <div className="Div-Label">
                        <label className="Label-Esqueceu" for="usuario">ESQUECEU A SENHA ?</label>
                        <div className="espac6"></div>
                    </div>
                </div>
                
                <div className="Div-Button">
                    <Link to='./adm'><button className="botton">ENTRAR</button></Link> 
                </div>
            </div>



        </section>
</div>
    )
}