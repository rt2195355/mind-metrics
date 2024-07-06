import './playground.css';
import ReactionTime from './ReactionTime';
import WordMemory from './WordMemory';
import Home from './Home';

const Playground = ({ selectedGame }) => {
    let Child = <Home />;
    if (selectedGame === 'ReactionTime')
        Child = <ReactionTime />
    else if (selectedGame === 'WordMemory')
        Child = <WordMemory />
    return (
        <div className="playground">
            {Child}
        </div>
    )
}

export default Playground;
