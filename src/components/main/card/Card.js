import React from 'react';
import css from './card.module.css';
import {useRef} from 'react';
import { Link } from 'react-router-dom';

function Card(props) {

  const ref = useRef(null);

  const idCard = +window.location.pathname.split('/tasks/:').join('');
  const card = props.cards.filter((card) => +card.id === idCard)[0];

  const handleClick = (id, newDescription) => {
    props.changeDescriptionCard(id, newDescription);
  };

  return (
    <div className={css.card}>
      <div className='container' style={{height: '91%'}}>
        <div className={css.card__wrapper}>

          <p className={css.card__title}>{card.title}</p>
          
          <textarea className={css.description} ref={ref} >
            {card.description}
          </textarea>
          
          <button className={css.button} onClick={() => {handleClick(idCard, ref.current.value)}}>
            <Link to='/' style={{color: 'black', textDecoration: 'none'}}>X</ Link>
          </button>
  
        </div>
      </div>
    </div>
  )
}

export default Card;