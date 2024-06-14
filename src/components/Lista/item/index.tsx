import style from '../Lista.module.scss'

export default function Item({ tarefa, tempo}: {tarefa: string, tempo: string}) {
    return (
     <li key=(index) classname={style.item}>
       <h3> {item.tarefa} </h3>
       <span> {item.tempo} </span>
     </li>
      }
  }