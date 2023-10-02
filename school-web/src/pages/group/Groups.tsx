import { groups } from "../../testData/groups";
import CardGroup from "../../components/group/cardGroup/CardGroup";
import "./Group.sass"

const Groups = () => {
  return (
    <div className="groups">
      {
        groups.map( group => 
          <div className="group-container">
            <CardGroup 
              group={group} 
              key={group.id}
            />
          </div>
        )
      }
    </div>
  )
}

export default Groups