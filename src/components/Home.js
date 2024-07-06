import React from 'react'
import Card from './Card'
import './home.css'

const Home = (props) => {
    return (
        <div className='home'>
            {
                games.map((item) => {
                    return <Card key={item.id} name={item.name} text={item.text} src={item.src} displayName={item.displayName} {...props} />
                })
            }
        </div>
    )
}

export default Home;


const games = [
    {
        id: 1,
        displayName: "Word Memory",
        name: "WordMemory",
        text: "Test Your Short-term memory here!",
    },
    {
        id: 2,
        displayName: "Reaction Time",
        name: "ReactionTime",
        text: "How fast are you? Check here!",
    },
]