import { createContext } from 'react';

interface GroupsContextInterface{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  students: Array<any>
  setStudents: () => void
}

const initialContextValues = {
  students: [],
  setStudents: () => {}
}

const GroupsContext = createContext<GroupsContextInterface>(initialContextValues);

export default GroupsContext;