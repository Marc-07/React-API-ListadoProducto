import Card from "../molecules/Card"

const ListaCard = ({pokemons}) => {
  return (
    <div>
        {pokemons.map((pokemon, index) => (
            <Card 
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                abilities={pokemon.abilities}
            />
        ))}
    </div>
  )
}
export default ListaCard