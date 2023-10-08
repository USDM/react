import React, { createContext } from 'react';
import ListStudentsInterface from '../interfaces/student/ListStudentInterface';

interface StudentContextInterface{
  students: ListStudentsInterface
  setStudents: React.Dispatch<React.SetStateAction<never[]>>;
}

const initialContextValues = {
  students: [],
  setStudents: () => {}
}

const StudentContext = createContext<StudentContextInterface>(initialContextValues);

export default StudentContext;