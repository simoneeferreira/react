import './App.css';
import React from 'react';
import First from './components/basicos/first';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Cards from './components/layout/Cards';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';

export default (props) =>(
    <div className="App">
    <h1>Fundamentos React</h1>
        <div className="Card">
            <Cards titulo="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Cards>
            <Cards titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Cards>
            <Cards titulo="#08 - Comunicacao Indireta" color="#000">
                <Super></Super>
            </Cards>
            <Cards titulo="#07 - Comunicacao Direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Cards>
            <Cards titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={13}></CondicionalComIf>
            </Cards>
            <Cards titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Cards>
            <Cards titulo="#04 - Repeticao" color="#008BBA">
                <Repeticao></Repeticao>
            </Cards>
            <Cards titulo="#03 - Componentes com filhos"color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
            </Cards>
            <Cards titulo="#02 - Componente com parametro" color="#FF85CB">
            <ComParametro titulo="Esse e o titulo"
                subtitulo="Esse e o subtitulo"></ComParametro>
            </Cards>
            <Cards titulo="#01 - Primeiro Componente" color="#92B06A">
                <First/>
            </Cards>
        </div>
        
        
    </div>
);

