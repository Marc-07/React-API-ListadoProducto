import Card from "../components/molecules/Card";

const ProductList = ({ products }) => {
    return (
        <>
            <h2>Lista de Pokémon</h2>
            {products.length === 0 ? (
                <p>Cargando Pokémon...</p>
            ) : (
                <div className='pokemon-container'>
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            name={product.name}
                            image={product.image}
                            abilities={product.abilities}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
export default ProductList;
