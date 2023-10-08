
export function generateStudents(ID: string){
  const students_tmp = [];
  for( let i = 0; i < 40; i++ ){
    students_tmp.push(
      {
        id:i,
        name:ID+" URIEL"
      }
    );
  }
  return students_tmp;
}
