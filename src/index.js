import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Form from './pages/Form';
import Adm from './pages/Adm';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<App/>} /> 
        <Route path='/form' element={<Form/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/adm' element={<Adm/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

