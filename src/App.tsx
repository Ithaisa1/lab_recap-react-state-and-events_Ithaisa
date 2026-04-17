import { useState } from 'react';
import { studentsData } from './students';
import './App.css';
import AddStudentForm from './components/AddStudentForm';
 
type Student = {
  _id: string;
  fullName: string;
  image: string;
  phone: string;
  email: string;
  program: string;
  graduated: boolean;
};
 
function App() {
  const [students, setStudents] = useState<Student[]>(studentsData);
 
  // función para añadir estudiante
  const addStudent = (newStudent: Student) => {
    setStudents([...students, newStudent]);
  };
 
  return (
    <div className="App">
      <h1>List students</h1>
 
      {/* Formulario conectado */}
      <AddStudentForm onAddStudent={addStudent} />
 
      <div className="student-list">
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <img src={student.image} alt={student.fullName} />
            <h2>{student.fullName}</h2>
            <p>Phone: {student.phone}</p>
            <p>Email: {student.email}</p>
            <p>Program: {student.program}</p>
            <p>
              Graduated: {student.graduated ? 'Yes' : 'No'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default App;