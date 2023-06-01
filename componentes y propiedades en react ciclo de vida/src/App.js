import './App.css';
import React from 'react';
import MiComponente from './components/mi-componente-de-clase';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      componenteVisible: true,
      nombre: 'Ubits'
    };
  }

  actualizarComponente = ()=>{
    this.setState({componenteVisible: true})
  }

  desmontarComponente = ()=>{
    this.setState({componenteVisible: false})
  }

  render(){
    return(
      <div>
        {this.state.componenteVisible && <MiComponente/>}
        <button onClick={this.actualizarComponente}>Actualizar Estado</button>
        <button onClick={this.desmontarComponente}>Desmontar Componente</button>
      </div>
    )
  }

}

export default App;
