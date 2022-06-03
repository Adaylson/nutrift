import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App';
import Cadastro from './pages/Cadastro/index';
import Home from './pages/Home/index';
import Form from './pages/Form/index';
import Adm from './pages/Adm/index';
import Login from './pages/Login/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} /> 
        <Route path='/form' element={<Form/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/adm' element={<Adm/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

