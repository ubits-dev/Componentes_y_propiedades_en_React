import React, { Component } from 'react';

class MiComponente extends Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
        console.log('constructor');
      }
    
      componentDidMount() {
        // codigo que se ejecuta cuando se monta el componente
        console.log('Componente montado');
      }
    
      componentDidUpdate(prevProps, prevState) {
        // codigo que se ejecuta cuando se actualiza el componente
        console.log('Componente actualizado, contador anterior:', prevState.contador);
      }
    
      componentWillUnmount() {
        // codigo que se ejecuta cuando se desmontar el componente
        console.log('Componente desmontado');
      }
    
      incrementarContador = () => {
        this.setState({
          contador: this.state.contador + 1
        });
      }
    
      render() {
        console.log('render');
        return (
          <>
            <h1>Contador: {this.state.contador}</h1>
            <button onClick={this.incrementarContador}>Incrementar</button>
          </>
        );
      }
    }

export default MiComponente;
