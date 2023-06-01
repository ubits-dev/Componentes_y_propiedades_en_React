import React from 'react';

const Contador = ({valor, modificarContador}) => {
    const incrementarContador = () =>{
        modificarContador(valor + 1);
    }

    const decrementarContador = () =>{
        modificarContador(valor - 1);
    }

    const resetearContador = () =>{
        modificarContador(0);
    }

    return (
        <>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={resetearContador}>Reset</button>
        </>
    )
}
export default Contador;