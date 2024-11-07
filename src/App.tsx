import { useEffect, useState } from 'react'
import { MapView } from './Views/MapView/MapView.tsx'
import './App.css'
import { DataView } from './Views/DataView/DataView.tsx'


function App() {

  const [count, setCount] = useState(0)

  return (
    <div id='container'>
      <header>x
      </header>
      <MapView></MapView>     
      <DataView></DataView>
    </div>
  )
}

export default App
