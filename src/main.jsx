import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Formacao from './pages/Formacao/formacao.jsx';
import Portifolio from './pages/Portifolio/portifolio.jsx';
import Contato from './pages/Contato/Contato.jsx'

const router = createBrowserRouter([ 
    {path: "/", 
        element: <App />, 
        children:[ 
        { 
            path:"/", 
            element: <Home /> 
        }, 
        {path: "Portifolio", 
        element: <Portifolio />
        },
        {path: "Formacao", 
        element: <Formacao />
        },
        {path: "Contato", 
        element: <Contato />
        }
        ] 
    }, 
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/> 
);