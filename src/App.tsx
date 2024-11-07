import { useEffect, useState } from 'react'
import { MapView } from './Views/MapView.tsx'


import './App.css'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <MapView></MapView>     
      </header>

    </>
  )
}

export default App
