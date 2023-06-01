
import React from "react";

const Contentador = ({ valor, modificarContador  }) => {

    const incrementarContador = () => {
        modificarContador(valor + 1);
    }


    const decrementarContador = () => {
        modificarContador(valor - 1);

    }

    const resetearContador = () => {
        modificarContador(0);

    }

    return (
        <>
            <button onClick={incrementarContador}>Increment</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={resetearContador}>Reset</button>
            <p>Contador: {valor}</p>
        </>
    );
}

export default Contentador


