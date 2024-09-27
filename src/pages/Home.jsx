import TeamList from "../components/organisms/TeamList";
import fotoMaria from "../assets/fotoMaria.jpg"

const Home = () => {

  const members = [

    {
      name: "María A. Ramos",
      photo: fotoMaria,
      github: "https://github.com/Marc-07",
      linkedin: "https://www.linkedin.com/in/maria-ramos-57b95b258/"
    },
  ]

  return (

    <div>
      <h1>Equipo de Desarrollo</h1>
      <TeamList members = {members} />  
    </div>
    
  )
}
export default Home