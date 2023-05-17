import React, { useState } from 'react';
import css from './addCard.module.css';

function AddCard(props) {

  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = () => {
    if (title === '') {
      props.closeAddCard()
      return
    }
    setTitle('');
    props.onSubmit({title});
  }
  
  return (
    <div className={css.card}>
      <input type='text' value={title} onChange={(e) => onChange(e)}></input>
      <button onClick={onSubmit}>submit</button>
    </div>
  )
}

export default AddCard;