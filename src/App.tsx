import React from 'react';
import { useState } from 'react';

import './App.css';
import { Tarjeta } from './components/Tarjeta';


function App() {
  const [contador, setContador] = useState(0);
  function incrementar() {
    setContador(contador + 1);
  }
  return (
    <div style={{ padding: "2rem" }}>
      <Tarjeta 
      titulo='Contador'
      mensaje={`Has hecho clic ${contador} veces`}/>

      <button onClick={incrementar}>Sumar</button>
    </div>
  
  );
}

export default App;
