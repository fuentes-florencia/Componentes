import { useState } from 'react'
import { Titulo } from './Componentes/Titulo'
import { Suma } from './Componentes/Suma'
import { TituloAlternativo } from './Componentes/TituloAlternativo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suma a={15} b={15}/>
    <TituloAlternativo condicion={false}/>


    </>
  )
}

export default App
