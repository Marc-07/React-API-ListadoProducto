import TeamMember from "../molecules/TeamMember"

const TeamList = ({members}) => {
  return (
    <div>
        {members.map((member, index) => (
            <TeamMember key={index} member={member} />
        )) }
    </div>
  )
}

export default TeamList