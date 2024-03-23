import React from 'react';
import classes from "./AuthInput.module.css";

const AuthInput = ({placeholder}) => {
    return (
        <input className={classes.AuthInput} placeholder={placeholder} type="text"/>
    );
};

export default AuthInput;