import "./ListStudents.sass"

interface StudentInterface {
  id: number,
  name: string
}
interface ListStudentsPropsInterface {
  students: Array<StudentInterface>
}

const ListStudents = ({students}: ListStudentsPropsInterface) => {
  return (
    <div className="list-students">
      {
        students.map( student => {
          return (
            <div className="student" key={student.id}>
              {student.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default ListStudents