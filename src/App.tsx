import { MapView } from './Views/MapView/MapView.tsx'
import './App.css'
import { DataView } from './Views/DataView/DataView.tsx'


function App() {


  return (
    <div id='container'>
      <header>
        <h1>Cade o Circular?</h1>
      </header>
      <main>
      <MapView></MapView>     
      <DataView></DataView>
      </main>
      
      <footer>
        <button>Previsões</button>
        <button>Rotas</button>
      
      </footer>
    </div>
  )
}

export default App
