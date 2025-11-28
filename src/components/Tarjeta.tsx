
import { useState } from 'react';


export default function Tarjeta() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{`Has hecho clic ${contador} veces`}</p>

      <button onClick={() => setContador(contador + 1)}>
        ➕ Sumar
      </button>
       <button onClick={() => setContador(contador - 1 )}>
        ➖ Restar
      </button>
      </div>
      )
      }