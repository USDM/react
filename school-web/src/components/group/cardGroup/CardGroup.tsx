import { useContext } from "react"
import "./CardGroup.sass"
import { publish } from "../../../utils/pubsub"
import { ModalShownInEvent } from "../../../utils/events/ModalShownInEvent"
import StudentContext from "../../../contexts/StudentContext"
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

  const { setStudents } = useContext(StudentContext);

  const handleClickViewStudents = (group:GroupInterface) => {
    setStudents(group.students as never[]);
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