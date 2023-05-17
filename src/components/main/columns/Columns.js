import React, { useState } from 'react';
import css from './columns.module.css';
import AddCard from './addCard/AddCard';

function Columns(props) {

  const [isOpenAddcard, setIsOpenAddCard] = useState(false);

  const openAddCard = () => {
    setIsOpenAddCard(true);
  }

  const closeAddCard = () => {
    setIsOpenAddCard(false);
  }
  
  return (
    <div className={css.column}>

      <div className={css.column__item}>
        <h3 className={css.column__title}>{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</h3>
        {props.tasks
          .filter((task) => task.status === props.status)
          .map((task) => (
            <div className={css.task} key={task.id}>
              <p className={css.task__title}>{task.title}</p>
            </div>
          ))
        }
        {isOpenAddcard && <AddCard onSubmit={props.onCreateTask} closeAddCard={closeAddCard}/>}
        <button className={css.button} onClick={openAddCard}>+ Add card</button>
      </div>      

    </div>
  )
}

export default Columns;