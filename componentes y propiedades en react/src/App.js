import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const infoDelPadre = { nombre: "Ubits", slogan: "El HUB de aprendizaje para empresas"}

  const [contador, setContador] = useState(0);

  const modificarContadorPadre = (valor) =>{
    setContador(valor)
  }

  return (
    <div className='App'>
      <Navbar info = {infoDelPadre} />
      <h1>Contador = {contador}</h1>
      <Content/>
      <Contador valor={contador} modificarContador={modificarContadorPadre} />
      <Footer/>
    </div>
  );
}

export default App;

