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
    <div className={css.wrapper}>
      <UserAvatar />
      <span className={css.arrow} onClick={toggleMenu}>
        {isOpenMenu ? <ArrowUp /> : <ArrowDown />}
      </span>

      {isOpenMenu && <div className={css.menu}>
                <div>Profile</div>
                <div>Log Out</div>
        </div>
      }

    </div>
  )
}

export default UserMenu;