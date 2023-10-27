import React from 'react'
import ReactDOM from 'react-dom/client'

import {Routes,Route, BrowserRouter} from "react-router-dom";

import ToListen from './ToListen/ToListen.jsx';
import Detalhe from './Detalhe/detalhe.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<ToListen />}></Route>
            <Route path = '/detalhe/:id' element={<Detalhe/>}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)