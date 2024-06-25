import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './Item.module.scss';


function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map(item => (
                <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                
                />
             ))}
        </ul>
    </aside>
  )
}



export default Lista;