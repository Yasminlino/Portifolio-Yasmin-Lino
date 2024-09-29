import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/Header/header';

function App() { 

  //Todas as paginas serão inseridas no <Outlet /> 
  return( 
    <div>
      <section className="cabecalho">
        <Header />
        <Outlet />
      </section> 
       
    </div> 
  ) 
}  

export default App;