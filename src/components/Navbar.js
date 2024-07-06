import './navbar.css';

const Navbar = ({ onChange }) => {
    return (
        <div className="navbar">
            <div className="links" onClick={
                () => {
                    onChange("WordMemory")
                }
            }>Word Memory</div>
            <div className="links" onClick={
                () => {
                    onChange("Home")
                }
            }>Home</div>
            <div className="links" onClick={
                () => {
                    onChange("ReactionTime")
                }
            }>Reaction Time</div>
        </div>
    );
}

export default Navbar