import './card.css'
import logo from '../assets/mem.png'
const Card = ({ name, text, onChange, displayName }) => {
    return (
        <div className="card" onClick={() => {
            onChange(name)
        }}>
            <img src={logo} alt="" />
            <h1>{displayName}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Card;
