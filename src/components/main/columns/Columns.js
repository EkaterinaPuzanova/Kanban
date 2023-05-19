import React, { useState } from 'react';
import css from './columns.module.css';
import { Link } from 'react-router-dom';

function Columns(props) {

  const [isOpenAddCard, setIsOpenAddCard] = useState(false);
  const [title, setTitle] = useState('');

  const openAddCard = () => {
    setIsOpenAddCard(true);
  }

  const closeAddCard = () => {
    setIsOpenAddCard(false);
  }

  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = () => {
    if (title === '') {
      closeAddCard()
      return
    }
    setTitle('');
    props.onCreateTask({title});
    closeAddCard();
  }

  const onChangeSelect = (id, newStatus) => {
    props.onStatusChange(id, newStatus);
    closeAddCard();
  }
  
  return (
    <div className={css.column}>

      <div className={css.column__item}>
        <h3 className={css.column__title}>{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</h3>
        {props.tasks
          .filter((task) => task.status === props.status)
          .map((task) => (
            <Link to={`/tasks/:${task.id}`} style={{color: 'black', textDecoration: 'none'}}>
              <div className={css.task} key={task.id}>
                <p className={css.task__title}>{task.title}</p>
              </div>
            </Link>
          ))
        }

        {isOpenAddCard && (props.status === 'backlog') &&
            <input className={css.input} type='text' value={title} onChange={(e) => onChange(e)}></input>
        }

        {isOpenAddCard && (props.status !== 'backlog') &&
            <select className={css.select}  onChange={(e) => onChangeSelect(e.target.value, props.status)}>
                <option style={{display: 'none'}}></option>
                {props.tasks
                    .filter((task) => task.status === props.statuses[props.statuses.indexOf(props.status) - 1])
                    .map((task) => (
                        <option className={css.task} key={task.id} value={task.id}>{task.title}</option> /////////////////
                ))}
            </select>
        }

        <button 
              className={isOpenAddCard ? `${css.button} ${css.buttonSubmit}` : css.button}
              style={(isOpenAddCard && (props.status !== 'backlog')) ? {display: 'none'} : {}}
              onClick={isOpenAddCard ? onSubmit : openAddCard}>
              {isOpenAddCard ? 'Submit' : '+ Add card'}
        </button>
      </div>      

    </div>
  )
}

export default Columns;