import { useContext } from "react"
import "./ListStudents.sass"
import GroupsContext from "../../../contexts/GroupsContext.js";
import { v4 as uuidv4 } from 'uuid';
import StudentInterface from "../../../interfaces/student/StudentInterface.js";

const ListStudents = () => {
  const { selectedGroup, setSelectedGroup } = useContext(GroupsContext);

  const handleDeleteStudent = (student:StudentInterface) => {
    const indexToDelete = selectedGroup.students.findIndex( el => el.id === student.id);
    selectedGroup.students.splice(indexToDelete,1);
    setSelectedGroup({...selectedGroup});
  }

  return (
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          selectedGroup.students.map( student => {
            return (
              <tr key={uuidv4()}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>handleDeleteStudent(student)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ListStudents