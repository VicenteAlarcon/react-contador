
import { useState } from 'react';
import "./Tarjeta.css";

export default function Tarjeta() {
  const [contador, setContador] = useState(0);

  return (
    <div className='tarjeta'>
      <p> Has hecho clic {contador} veces</p>

      <button onClick={() => setContador(contador + 1)}>
        ➕ Sumar
      </button>
       <button onClick={() => setContador(contador - 1 )}>
        ➖ Restar
      </button>
      </div>
      )
      }