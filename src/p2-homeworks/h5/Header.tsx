import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <div className={s.menu}> {nav && <NavLink className={s.navLink} to={'/pre-junior'}
                                                      activeClassName={s.link}>pre-junior</NavLink>}

                {nav && <NavLink className={s.navLink} to={'/junior'} activeClassName={s.link}>junior</NavLink>}
                {nav && <NavLink className={s.navLink} to={'/junior-plus'} activeClassName={s.link}>junior+</NavLink>}
                <span className={s.links} onClick={() => {
                    setNav(!nav)
                }}>links</span>
            </div>


        </div>
    )
}

export default Header
