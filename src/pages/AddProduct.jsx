import Input from "../components/atoms/input"
import Button from "../components/atoms/Button"

const AddProduct = () => {
  return (
    <form onSubmit={handleSubmit}>
        <h2>Agrega un Pokemon 😼</h2>
        <Input />
        <Button />
    </form>
  )
}
export default AddProduct