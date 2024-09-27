import { useState } from "react"
import Home from "./pages/Home";

function App() {

  const [currenPage, setCurrentPage] = useState ("home");

  const renderPage = () =>{
    switch (currenPage) {
      case "home":
        return <Home />
      case "addProduct":
        return <AddProduct />
      case "productList":
        return <ProductList />
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
