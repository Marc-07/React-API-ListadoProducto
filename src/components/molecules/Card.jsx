const Card = ({name, image, abilities}) => {
  return (
    <div>
        <figure>
            <img src={image} alt={name} />
        </figure>
        <h3>{name}</h3>
        <aside>
            <p>Stack</p>
            <p>{abilities}</p>
        </aside>
    </div>
  )
}
export default Card