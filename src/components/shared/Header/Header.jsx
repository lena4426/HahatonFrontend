import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__rating}>
                Рейтинг
            </div>
            <div className={classes.header__avatar}>

            </div>
        </div>
    );
};

export default Header;