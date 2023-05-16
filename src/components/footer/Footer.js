import React from 'react';
import css from './footer.module.css';

function Footer() {
  return (
      <footer className={css.footer}>
        <div className='container'>
          <div className={css.footer__wrapper}>
            <div className={css.footer__result}>
              <span className={css.result}>Active tasks: 7</span>
              <span className={css.result}>Finished tasks: 8</span>
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