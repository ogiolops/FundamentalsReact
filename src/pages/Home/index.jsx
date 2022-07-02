import React, {useState} from 'react'
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const[studentName, setStudentName] = useState();

  return (
    <div className="container" >
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" >Adicionar</button>

      <Card name='Giovanni Lopes' time='10:15:20'/>
      <Card name='Jeid souza' time='10:10:10' />

    </div>

    

  )
}
