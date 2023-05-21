import React, { useState } from 'react';
import css from './columns.module.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';

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

  const arrTasksPreviousColumn = props.tasks
            .filter((task) => task.status === props.statuses[props.statuses.indexOf(props.status) - 1]);
  const options = arrTasksPreviousColumn.map((task) => ({value: task.title, label: task.title, id: task.id}));

  return (
    <div className={css.column}>

      <div className={css.column__item}>
        <h3 className={css.column__title}>
          {props.status === 'progress' ?
                  'In progress'
                  :
                  props.status.charAt(0).toUpperCase() + props.status.slice(1)}
        </h3>
        <div className={css.tasks}>
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
        </div>
        

        {isOpenAddCard && (props.status === 'backlog') &&
            <input className={css.input} type='text' value={title} onChange={(e) => onChange(e)}></input>
        }

        {/* const option = arrTasksPreviousColumn.map((task) => ({value: {task.title}, label: {task.id}})) */}
        
        {isOpenAddCard && (props.status !== 'backlog') &&
            // <select className={css.select} onChange={(e) => onChangeSelect(e.target.value, props.status) }>
            //     <option style={{display: 'none'}}></option>
            //     {arrTasksPreviousColumn.map((task) => (
            //             <option className={css.task} key={task.id} value={task.id}>{task.title}</option> /////////////////
            //     ))}
            // </select>
          
            <Select options={options}
                styles={{
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: `white`
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: 'white'
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    background: state.isFocused ? `Gainsboro` : 'white',
                  }),
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    maxHeight: '17vh',
                    overflow: 'auto'
                  }),  
                  indicatorSeparator: (baseStyles, state) => ({
                    ...baseStyles,
                    background: 'white'
                  }),
                }}
                onChange={(e) => onChangeSelect(e.id, props.status)} />            
        }

        <button 
              className={isOpenAddCard ? `${css.button} ${css.buttonSubmit}` : css.button}
              style={(isOpenAddCard && (props.status !== 'backlog')) ? {display: 'none'} : {}}
              onClick={isOpenAddCard ? onSubmit : openAddCard}
              disabled={!isOpenAddCard && (props.status !== 'backlog') && (arrTasksPreviousColumn.length === 0)}>
              {isOpenAddCard ? 'Submit' : '+ Add card'}
        </button>
      </div>      

    </div>
  )
}

export default Columns;