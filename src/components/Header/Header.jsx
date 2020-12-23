import React from 'react';
import Style from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={Style.header__wrapper}>
            <div className={Style.logoHeader}>
            <img src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png"
                 alt="placeholder+image"/>
                 <h1>Social Network of Samurai v.1.0</h1>
            </div>
            <div className={Style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;