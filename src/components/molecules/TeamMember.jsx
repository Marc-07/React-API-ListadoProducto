const TeamMember = ({member}) => {
  return (
    <div className="team-member">
        <img src={member.photo} alt={member.name}/>
        <h2 >{member.name}</h2>
        <p>Desarrolladora Front-End 💻</p>
        <div className="social-links">
            <a href={member.github} target="_blank" rel="noopener noreferrer">
                GitHub           
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                Linkedin
            </a>           
        </div>
    </div>
  )
}

export default TeamMember