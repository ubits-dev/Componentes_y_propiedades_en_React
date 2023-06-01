import React from 'react';

const Content = (props) =>{
const {valor, modificarValor} = props;

const incrementarContador = ()=>{
    modificarValor(valor + 1);
}
    return (
        <button onClick={incrementarContador}>Incrementar</button>
    )
}

export default Content;