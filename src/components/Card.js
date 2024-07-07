import './card.css'
import memory from '../assets/memory.png';
import reaction from '../assets/reaction.png';
const Card = ({ name, text, onChange, displayName }) => {
    return (
        <div className="card" onClick={() => {
            onChange(name)
        }}>
            <img src={displayName === 'Word Memory' ? memory : reaction} alt="" />
            <h1>{displayName}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Card;
