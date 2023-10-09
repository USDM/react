import ListStudentsInterface from "../student/ListStudentInterface";

export default interface GroupInterface{
  id?: number | string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  students: ListStudentsInterface;
}