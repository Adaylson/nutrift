
import './index.scss'
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <div className='img-planta'></div>
                    <p className='nutrifit-text'>NUTRIFIT</p>
                </div>

                <div className='menu-items'>
                    <Link to='../'>
                        <img src="/assets/images/icon-home.svg" alt="home" />
                        <div>Home</div>
                    </Link>
                    <Link to='../form'>
                        <img src="/assets/images/Group.svg" alt="cadastrar" />
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='../adm'>
                        <img src="/assets/images/icon-consultar.svg" alt="consultar" />
                        <div>Consultar</div>
                    </Link>
                </div>
            </div>

            <div className='menu-items-sair'>
                <div>
                    <img src="/assets/images/icon-sair.svg" alt="consultar" />
                    <div>Sair</div>
                </div>
            </div>
        </nav>
    )
}