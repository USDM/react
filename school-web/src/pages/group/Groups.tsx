import { useEffect, useState } from "react"
import { groups as testDataGroups } from "../../testData/groups";
import CardGroup from "../../components/group/cardGroup/CardGroup";
import Modal from "../../components/common/modal/Modal";
import "./Group.sass"
import ModalStudents from "../../components/student/modalStudents/ModalStudents";
import { v4 as uuidv4 } from 'uuid';
import GroupsContext from "../../contexts/GroupsContext";
import groupInitial from "../../initials/group/groupInitial";
import GroupInterface from "../../interfaces/group/GroupInterface";


const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState<GroupInterface>(groupInitial);
  const [groups, setGroups ] = useState<Array<GroupInterface>>([]);

  useEffect(()=>{
    initiateGroups();
  },[]);

  const initiateGroups = () => {
    const groupsInLocal = localStorage.getItem("groups");
    if(groupsInLocal){
      setGroups(JSON.parse(groupsInLocal));
      return;
    }
    localStorage.setItem("groups", JSON.stringify(testDataGroups));
    setGroups( testDataGroups.map(el => el ) as never );
  }

  useEffect(()=>{
    const isValidateTheGroup = selectedGroup.name !== ""
    if( !isValidateTheGroup ) return
    localStorage.setItem("groups", JSON.stringify(groups));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGroup.students.length])
  
  return (
    <GroupsContext.Provider value={{selectedGroup, setSelectedGroup}}>
      <div className="groups">
        {
          groups.map( group => 
            <div className="group-container" key={uuidv4()}>
              <CardGroup 
                group={group} 
              />
            </div>
          )
        }
        <Modal title={selectedGroup.name}>
          <ModalStudents/>
        </Modal>
      </div>
    </GroupsContext.Provider>
  )
}

export default Groups