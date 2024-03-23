import React from 'react';
import classes from "../Register/Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";

const Login = ({text}) => {
    return (
        <div className={classes.register}>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "62px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "48px", fontSize: "32px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "24px", marginBottom: "38px"}}>
                        <AuthInput placeholder={"Почта/Логин"}/>
                        <AuthInput placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton text="Вход"/>
                        <AuthButton text="Зарегистрироваться" bordered={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;