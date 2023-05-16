import React from 'react';
import css from './userMenu.module.css';
import { UserAvatar } from './icons/UserAvatar';
import { ArrowUp } from './icons/ArrowUp';
import { ArrowDown } from './icons/ArrowDown';
import {useState} from "react";

function UserMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div className={css.userMenu}>
      <div className={css.userMenu__wrapper} onClick={toggleMenu}>
        <UserAvatar />
        <span className={css.arrow}>
          {isOpenMenu ? <ArrowUp /> : <ArrowDown />}
        </span>
      </div>
      {isOpenMenu && 
          <div className={css.menu}>
                  <div className={css.menu__item}>Profile</div>
                  <div className={css.menu__item}>Log Out</div>
          </div>
      }
    </div>
    
  )
}

export default UserMenu;