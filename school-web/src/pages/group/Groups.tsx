import { useState } from "react"
import { groups } from "../../testData/groups";
import CardGroup from "../../components/group/cardGroup/CardGroup";
import Modal from "../../components/common/modal/Modal";
import "./Group.sass"
import ModalStudents from "../../components/student/modalStudents/ModalStudents";
import StudentContext from "../../contexts/StudentContext";

const Groups = () => {
  const [students, setStudents] = useState([]);
  return (
    <StudentContext.Provider value={{students, setStudents}}>
      <div className="groups">
        {
          groups.map( group => 
            <div className="group-container" key={group.id}>
              <CardGroup 
                group={group} 
              />
            </div>
          )
        }
        <Modal>
          <ModalStudents/>
        </Modal>
      </div>
    </StudentContext.Provider>
  )
}

export default Groups