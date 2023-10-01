import { groups } from "../../testData/groups";
import Collapse from "../../components/group/Collapse";
import ListStudents from "../../components/group/listStudents/ListStudents";
import "./Group.sass"

const Groups = () => {
  return (
    <div className="groups">
      {
        groups.map( group => 
        <Collapse 
          mainContent={group.name} 
          subContent={<ListStudents students={group.students}/>} 
          id={group.id} 
          key={group.id}
        />)
      }
    </div>
  )
}

export default Groups