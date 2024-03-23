import React from 'react';
import classes from "./Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";
import RegisterRequest from "../../../API/Auth";

const Register = ({text}) => {
    return (
        <div className={classes.register}>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "50px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "40px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "15px", marginBottom: "36px"}}>
                        <AuthInput placeholder={"Почта"}/>
                        <AuthInput placeholder={"Логин"}/>
                        <AuthInput placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton onClick={async () => await RegisterRequest("rqt", "teqtqe", "rteqtq")} text="Зарегистрироваться"/>
                        <a href="" className={classes.buttons__registered}>Вы уже зарегистрированы? Войти</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;