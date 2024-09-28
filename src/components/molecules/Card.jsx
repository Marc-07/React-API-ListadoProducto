const Card = ({name, image, abilities}) => {
  return (
    <div className="pokemon-card">
        <figure>
            <img className="pokemon-image" src={image} alt={name} />
        </figure>
        <h3>{name}</h3>
        <aside>
            <p className="parrafo">Stack</p>
            <p className="abilities">{abilities}</p>
        </aside>
    </div>
  )
}
export default Card