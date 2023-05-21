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
          <ul className={css.menu}>
                  <li className={css.menu__item}>Profile</li>
                  <li className={css.menu__item}>Log Out</li>
          </ul>
      }
    </div>
    
  )
}

export default UserMenu;