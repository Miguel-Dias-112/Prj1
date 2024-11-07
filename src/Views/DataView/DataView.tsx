import { useEffect, useState } from 'react'
import './DataView.css'



export function DataView() {

  const [count, setCount] = useState(0)

  return (
    <div className='DataView'>
        <div className='DataCtn'>
            <section>
                <h1>Seu Local</h1>
                <h2>Letras</h2>
            </section>        
            <section>
                <h1>Previsão de chegada</h1>
                <h2>10horas</h2>
            </section>
        </div>
        
       
    </div>
  )
}

