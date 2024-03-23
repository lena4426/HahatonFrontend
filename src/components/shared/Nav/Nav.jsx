import React from 'react';
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__logo}>
                Лого
            </div>
        </div>
    );
};

export default Nav;