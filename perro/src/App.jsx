import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Perro al Agua!" />
    </div>
  )
}

export default App

