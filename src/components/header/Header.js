import React from 'react';
import css from './header.module.css';
import UserMenu from './userMenu/UserMenu';

function Header() {
  return (
    <header className={css.header}>
      <div className='container'>
        <div className={css.header__wrapper}>
          <h1 className={css.header__title}>Awesome Kanban Board</h1>
          <UserMenu />
        </div>
      </div>
  </header>
  )
}

export default Header;