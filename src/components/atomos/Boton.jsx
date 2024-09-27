const Boton = ({ onClick, label, className = "", disabled = false}) => {
  
    <button onClick= {onClick} className= {`btn ${className}`} disabled= {disabled}>
        {label}
    </button>
  
}

export default Boton