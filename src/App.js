import React from 'react'
import Playground from './components/Playground'
import Navbar from './components/Navbar'
import ReactionTime from './components/ReactionTime'


const App = () => {
  return (
    <div>
      <Navbar />
      <Playground>
        <Card />
      </Playground>
    </div>
  )
}

export default App
