import "./CardGroup.sass"
import { publish } from "../../../utils/pubsub"
import { StudentsShownInEvent } from "../../../utils/events/StudentsShownInEvent"

interface StudentInterface {
  id: number,
  name: string
}

interface GroupInterface {
  id: number,
  name: string,
  students: StudentInterface[]
}

interface CardGroupPropsInterface{
  group: GroupInterface
}

const CardGroup = ({ group }:CardGroupPropsInterface) => {

  const handleClickViewStudents = (group:GroupInterface) => {
    publish(new StudentsShownInEvent(group.students));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{group.name}</h5>
        <button className="btn btn-primary" onClick={() => handleClickViewStudents(group)}>Ver</button>
      </div>
    </div>
  )
}

export default CardGroup