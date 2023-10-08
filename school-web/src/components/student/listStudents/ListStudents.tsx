import { useEffect, useContext } from "react"
import "./ListStudents.sass"
import { subscribe } from "../../../utils/pubsub.js";
import {StudentsShownInEvent} from "../../../utils/events/StudentsShownInEvent.js"
import StudentContext from "../../../contexts/StudentContext.js";

const ListStudents = () => {
  const { students, setStudents } = useContext(StudentContext);
  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handle = subscribe(StudentsShownInEvent, (params:any) => {
      setStudents(params.students);
    });

    return function cleanup() {
      handle.unsubscribe();
    };

  },[])
  return (
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map( student => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ListStudents