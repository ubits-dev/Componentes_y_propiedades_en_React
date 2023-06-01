import React from 'react';
import MiComponente from './components/MiComponente';
// import MiComponenteFuncional from './components/MiComponenteFuncional';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      componenteVisible: true,
       // componenteFuncionalVisible: true,
       nombre:'Ubits'
    };
  }

  actualizarComponente = () => {
    this.setState({ componenteVisible: true });
  };

  desmontarComponente = () => {
    this.setState({ componenteVisible: false });
  };
  
  /*
  actualizarComponenteFuncional = () => {
    this.setState({ componenteFuncionalVisible: true });
  };

  desmontarComponenteFuncional = () => {
    this.setState({ componenteFuncionalVisible: false });
  };
  */


  render() {
    return (
      <>
        <div>
          {this.state.componenteVisible && <MiComponente />}
          <button onClick={this.actualizarComponente}>Actualizar estado</button>
          <button onClick={this.desmontarComponente}>Desmontar componente</button>
        </div>
        {/*
        <div>
          {this.state.componenteFuncionalVisible && <MiComponenteFuncional nombre={this.state.nombre}/>}
          <button onClick={this.actualizarComponenteFuncional}>Actualizar estado Funcional</button>
          <button onClick={this.desmontarComponenteFuncional}>Desmontar componente Funcional</button>
        </div>
        */}
      </>
    );
  }
}
export default App;

