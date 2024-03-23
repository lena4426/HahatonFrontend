import React, {useState} from 'react';
import classes from "../Register/Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";
import {LoginRequest} from "../../../API/Auth";


const Login = ({text}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classes.register}>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "62px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "48px", fontSize: "32px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "24px", marginBottom: "38px"}}>
                        <AuthInput onChange={setUsername} placeholder={"Почта/Логин"}/>
                        <AuthInput onChange={setPassword} placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton onClick={async () => await LoginRequest(username, password)} text="Вход"/>
                        <AuthButton text="Зарегистрироваться" bordered={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;