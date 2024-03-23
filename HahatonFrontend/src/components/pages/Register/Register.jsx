import React, {useState} from 'react';
import classes from "./Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";
import RegisterRequest from "../../../API/Auth";

const Register = ({text}) => {

  const [inputMail, setMail] = useState('');
  const [inputLogin, setLogin] = useState('');
  const [inputPassword, setPassword] = useState('');

    return (
        <div className={classes.register}>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "50px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "40px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "15px", marginBottom: "36px"}}>
                        <AuthInput value={inputMail} onChange={setMail} placeholder={"Почта"}/>
                        <AuthInput value={inputLogin} onChange={setLogin} placeholder={"Логин"}/>
                        <AuthInput value={inputPassword} onChange={setPassword} placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton onClick={async () => await RegisterRequest(inputLogin, inputMail, inputPassword)} text="Зарегистрироваться"/>
                        <a href="" className={classes.buttons__registered}>Вы уже зарегистрированы? Войти</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
