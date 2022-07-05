import React, {useState} from 'react'
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const[studentName, setStudentName] = useState();
  const[students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="container" >
      <h1>Lista de presença</h1>
      <input 
        type="text" 
        placeholder="Digite seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent} >Adicionar</button>

      {
        students.map(student =>
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time}
          />
         )
      }

    </div>

    

  )
}
