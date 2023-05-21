import React from 'react';
import css from './main.module.css';
import Columns from './columns/Columns';

function Main(props) {

  return (
      <main className={css.main} >
        <div className='container'>
          <div className={css.main__wrapper}>
              {props.taskStatuses.map((status) => (
                <Columns
                  key={status}
                  status={status}
                  tasks={props.tasks}
                  onCreateTask={props.addCard}
                  statuses={props.taskStatuses}
                  onStatusChange={props.onStatusChange} />
              ))}
          </div>
        </div>
      </main>
  )
}

export default Main;