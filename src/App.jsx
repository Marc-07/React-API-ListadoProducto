import { useEffect, useState } from "react"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import "./styles/style.css"

function App() {

  const [currenPage, setCurrentPage] = useState ("home");
  const [products, setProducts] = useState([]);

 //Llamado de la API POKE 
  useEffect(() => {
    const initialProducts = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3");
            console.log(response)
            const data = await response.json();
            console.log(data)
            const upProducts = await Promise.all(data.results.map(async (item) => {
                const pokemonResponse = await fetch(item.url);
                const pokemonData = await pokemonResponse.json();

                return {
                    name: pokemonData.name,
                    image: pokemonData.sprites.other.dream_world.front_default,
                    abilities: pokemonData.abilities.map(ability => ability.ability.name).join(', '),
                };
            }));
            setProducts(upProducts);
        } catch (error) {
            console.error("Error al obtener los datos", error);
        }
    };

    initialProducts();
  }, []); 

  const renderPage = () =>{
    switch (currenPage) {
      case "home":
        return <Home />
      case "addProduct":
        return <AddProduct />
      case "productList":
        return <ProductList products={products}  /> //Se pasan los productos 
      default:
        return <Home />
    }
  }
  
  return (
    <>
      <div>
          <nav>
            <button onClick={() => setCurrentPage ("home")}>Inicio</button>
            <button onClick={() => setCurrentPage ("addProduct")}>Agregar</button>
            <button onClick={() => setCurrentPage ("productList")}>Lista</button>
          </nav>
          {renderPage()}
      </div>
    </>
  )
}

export default App
