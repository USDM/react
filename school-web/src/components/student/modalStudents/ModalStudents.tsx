import { useState } from 'react'
import ListStudents from '../listStudents/ListStudents'
import FormStudent from '../formStudent/FormStudent'
import "./ModalStudents.sass"

const ModalStudents = () => {
  const SHOW_FORM_STUDENT = "showFormStudent";
  const SHOW_LIST_STUDENTS = "showListStudent";
  const [mode, setMode] = useState(SHOW_LIST_STUDENTS);

  const handleClickShowAdd = () => {
    setMode(SHOW_FORM_STUDENT);
  }

  const handleClickShowList = () => {
    setMode(SHOW_LIST_STUDENTS);
  }

  return (
    <div>
      <div className='tabs'>
        <div onClick={handleClickShowList} > Lista </div>
        <div onClick={handleClickShowAdd} > Agrear </div>
      </div>
      {
        mode === SHOW_LIST_STUDENTS &&
        <ListStudents/>
      }
      {
        mode === SHOW_FORM_STUDENT &&
        <FormStudent/>
      }
    </div>
  )
}

export default ModalStudents