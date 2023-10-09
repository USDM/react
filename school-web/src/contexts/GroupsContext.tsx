import { createContext } from 'react';
import GroupInterface from '../interfaces/group/GroupInterface';

interface GroupsContextInterface{
  selectedGroup: GroupInterface
  setSelectedGroup: React.Dispatch<React.SetStateAction<GroupInterface>>;
}

const initialContextValues = {
  selectedGroup:{
    name:"",
    students: [],
  },
  setSelectedGroup: () => {}
}

const GroupsContext = createContext<GroupsContextInterface>(initialContextValues);

export default GroupsContext;