import Card from "../molecules/Card"

const ListaCard = ({pokemon}) => {
  return (
    <div>
        <Card 
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
        />  
    </div>
  )
}
export default ListaCard