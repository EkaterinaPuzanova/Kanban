import React from 'react';
import css from './footer.module.css';

function Footer(props) {

  const finishedTasks = props.tasks.filter((task) => task.status === 'finished').length;
  const activeTasks = props.tasks.filter((task) => task.status === 'backlog').length;

  return (
      <footer className={css.footer}>
        <div className='container'>
          <div className={css.footer__wrapper}>
            <div className={css.footer__result}>
              <span className={css.result}>Active tasks: {activeTasks}</span>
              <span className={css.result}>Finished tasks: {finishedTasks}</span>
            </div>
            <div className={css.footer__info}>
              <span>Kanban board by Ekaterina Puzanova, 2023</span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;