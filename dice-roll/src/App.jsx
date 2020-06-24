import './App.css';
import React from 'react';
import First from './components/basicos/first';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Cards from './components/layout/Cards';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default (props) =>(
    <div className="App">
        <Cards titulo="#06 - Condicional v2">
            <CondicionalComIf numero={13}></CondicionalComIf>
        </Cards>
        <Cards titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Cards>
        <Cards titulo="#04 - Repeticao">
            <Repeticao></Repeticao>
        </Cards>
        <Cards titulo="#03 - Componentes com filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        </Cards>
        <Cards titulo="#02 - Componente com parametro">
        <ComParametro titulo="Esse e o titulo"
            subtitulo="Esse e o subtitulo"></ComParametro>
        </Cards>
        <Cards titulo="#01 - Primeiro Componente">
            <First/>
        </Cards>
        
    </div>
);

