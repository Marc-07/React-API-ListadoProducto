import { useState } from "react"
import Input from "../components/atoms/input"
import Button from "../components/atoms/Button"

const AddProduct = ({onAddProduct}) => {

    const [pokemonName, setPokemonName] = useState ("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

            if (!response.ok) throw new Error("Pokémon no encontrado");
            const pokemonData = await response.json();

            const newProduct = {
                name: pokemonData.name,
                image: pokemonData.sprites.other.dream_world.front_default,
                abilities: pokemonData.abilities.map(ability => ability.ability.name).join(', '),
            };

            onAddProduct (newProduct);
            setPokemonName("");
        } catch (error){
            alert ("Pokemon no encontrado, intenta de nuevo.");
        }
    }

    
    return (
        
        <form onSubmit={handleSubmit}>
            <h2>Agrega un Pokemon 😼</h2>
            <Input 
                value={pokemonName}
                onChange={(e) => setPokemonName (e.target.value) }
                placeholder="Nombre del Pokémon"
            />
            <Button
                label="Agregar"
                disabled={!pokemonName.trim()}
                type="submit"
            />
        </form>
    )
}
export default AddProduct