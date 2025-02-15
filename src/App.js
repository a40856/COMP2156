import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student ID: 101502009</h1>
      <h1>Student Name: SIU KWAN KWOK</h1>
      <h1>Student Information System</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      <p>Developed By: SIU KWAN KWOK</p>  {/* Wrapped in a <p> tag */}
      <StudentList students={students} />
    </div>
  );
};

export default App;
