import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>

            <NavLink className={s.navLink} to={'/pre-junior'} activeClassName={s.link}>pre-junior</NavLink>
            <NavLink className={s.navLink} to={'/junior'} activeClassName={s.link}>junior</NavLink>
            <NavLink className={s.navLink} to={'/junior+'} activeClassName={s.link}>junior+</NavLink>

            <span>links</span>


        </div>
    )
}

export default Header
