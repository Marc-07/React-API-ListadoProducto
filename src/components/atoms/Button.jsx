const Button = ({ onClick, label, className = "", disabled = false}) => {
  
    <button onClick= {onClick} className= {`btn ${className}`} disabled= {disabled}>
        {label}
    </button>
  
}

export default Button