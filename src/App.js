import React, { useState } from 'react'
import Playground from './components/Playground'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  const [selectedGame, setSelectedGame] = useState('Home');
  return (
    <div>
      <Navbar selectedGame={selectedGame} onChange={setSelectedGame} />

      {
        selectedGame === ('Home') ?
          <>
            <Home selectedGame={selectedGame} onChange={setSelectedGame} />
          </> : <Playground selectedGame={selectedGame} />
      }
    </div>
  )
}
export default App;