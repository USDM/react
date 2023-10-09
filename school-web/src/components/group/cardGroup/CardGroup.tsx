import { useContext } from "react"
import "./CardGroup.sass"
import { publish } from "../../../utils/pubsub"
import { ModalShownInEvent } from "../../../utils/events/ModalShownInEvent"
import GroupsContext from "../../../contexts/GroupsContext"
import GroupInterface from "../../../interfaces/group/GroupInterface"

interface CardGroupPropsInterface{
  group: GroupInterface
}

const CardGroup = ({ group }:CardGroupPropsInterface) => {

  const { setSelectedGroup } = useContext(GroupsContext);

  const handleClickViewStudents = (group:GroupInterface) => {
    setSelectedGroup({...group});
    publish(new ModalShownInEvent());
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{group.name}</h5>
        <button className="btn btn-primary" onClick={() => handleClickViewStudents(group)}>Ver ff</button>
      </div>
    </div>
  )
}

export default CardGroup