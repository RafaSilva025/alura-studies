import React, { useState } from 'react';
import Item from './item';
import style from './Lista.module.scss;

function Lista() {
  const [tarefas, setTarefas] = useState(
    [{
      tarefa: 'React',
      tempo: "02:00:00"
    },
    {
      tarefa: 'Javascript',
      tempo: "01:00:00"
    },
    {
      tarefa: 'Typescript',
      tempo: "03:00:00"
    }]
  );
  return (
    <aside …>
      <h2 onClick={() => setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])}> … </h2>
      …
    </aside>
  ) 
}


export default Lista;