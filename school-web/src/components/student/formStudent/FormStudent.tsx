import { useRef, useContext, MouseEventHandler } from "react"
import StudentInterface from "../../../interfaces/student/StudentInterface";
import studentInitial from "../../../initials/student/studentInitial";
import EventFormInterface from "../../../interfaces/event/EventFormInterface";
import GroupsContext from "../../../contexts/GroupsContext";

const FormStudent = () => {
  const form = useRef<StudentInterface>(studentInitial);
  const { setSelectedGroup, selectedGroup } = useContext(GroupsContext);
  
  const handleChangeField = (e:EventFormInterface) => {
    form.current = {
    ...form.current,
      [e.target.name]: e.target.value,
    };
  }

  const handleClickCreate: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    addIdToNewStudent();
    setSelectedGroup( {...selectedGroup});
  }

  const addIdToNewStudent = () => {
    const ids = selectedGroup.students.map(el=>el.id ? el.id : -1);
    form.current.id = Math.max(...ids) + 1
    selectedGroup.students.push(form.current);
  }
  
  return (
    <form className="text-center mt-5">
      <label> <b> NUEVO ESTUDIANTE </b> </label>
      <input 
      type="text" 
      placeholder='Nombre' 
      className='form-control mt-3' 
      name="name" 
      onChange={handleChangeField}
      />
      <div className="mt-5">
        <button className="btn btn-primary" onClick={handleClickCreate}>Crear</button>
      </div>
    </form>
  )
}

export default FormStudent