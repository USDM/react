import { groups } from "../../testData/groups";
import CardGroup from "../../components/group/cardGroup/CardGroup";
import Modal from "../../components/modal/Modal";
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
      <Modal/>
    </div>
  )
}

export default Groups