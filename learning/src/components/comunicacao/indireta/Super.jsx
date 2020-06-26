import React, {useState} from 'react'
import Sub from './Sub'
export default props => {

    const[texto, setTexto] = useState('Valor')
    const[num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return(
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}


/* ou posso usar
#1
export default props => {

    function quandoClicar(valorGerado){
        console.log('Acao!!!')
        console.log(valorGerado)
    }

    return(
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
*/