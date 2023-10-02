export class StudentsShownInEvent implements StudentsShownInEventInterface{
  students: Array<unknown>
  constructor(students: Array<unknown>) {
    this.students = students
  }
}


interface StudentsShownInEventInterface{
  students: Array<unknown>;
}
