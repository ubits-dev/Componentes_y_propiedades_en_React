import React, { useState, useEffect } from 'react';

const MiComponenteFuncional = (props)=>{
    const [contador, setContador] = useState(0);

    useEffect(() => {
        // codigo que se ejecuta una sola vez luego de que se monte el componente
        // para eso se debe pasar un listado de dependecias vacio como segundo argumento
        // equivalente a componentDidMount
        // muy util por ejemplo para hacer un llamado a una API
        // solo una vez cuando el componente se monta
        console.log('Este codigo se ejecutara una sola vez una vez montado el Componente');
        
        return () => {
          // codigo que se ejecuta cuando se desmontar el componente
          // es una funcion de limpieza equivalente a componentWillUnmount
          console.log('Componente funcional desmontado');
        };
      }, []);

    useEffect(()=>{
        // codigo que se ejecuta cuando se modifica alguno de los valores
        // dentro de la lista de dependencias como segundo argumento
        console.log('Componente funcional actualizado')
    }, [contador])
    
    
      const incrementarContador = () => {
        setContador(contador + 1);
      }
    
        return (
          <>
            {console.log('render componente funcional')}
            <h1>Contador Funcional de {props.nombre}: {contador}</h1>
            <button onClick={incrementarContador}>Incrementar</button>
          </>
        );
    }
    

export default MiComponenteFuncional;