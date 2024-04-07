import { useState } from 'react'
import Carte from './composant/Carte/Carte'
import info from './info.json'
function App() {
 

  return (
    <>
      <Carte info={info} />
    </>
  )
}

export default App
