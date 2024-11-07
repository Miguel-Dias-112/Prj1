import { useEffect, useState } from 'react'
import './DataView.css'
import CadeCircular from '../../CircularApi/Circular.ts'


export function DataView() {

  const [count, setCount] = useState(0)
  const circular = new CadeCircular();
  circular.PontoAtual = 'LETRAS';

  
  return (
    <div className='DataView'>
        <div className='DataCtn'>
            <section>
                <h1>Seu Local</h1>
                <h2>Letras</h2>
            </section>        
            <section>
                <h1>Prox. Horario</h1>
                <h2>{circular.calcularTempoChegada()}</h2>
            </section>
            <section>
            </section>
        </div>
        
       
    </div>
  )
}

