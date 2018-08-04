import React from 'react';
import style from './style.css';
import {connect} from "react-redux";
import {emailValidate,passwordValidate, loginValidation} from "../../actions/form";

const SingForm =({validator, onEmailValidate,onPasswordValidate,onLoginValidation})=>{
    let email;
    let emailLine;
    let password;
    let passwordLine;
    let login;
    let loginLine;
    return(

        <div className={validator.showRegistration ? style.registrWrapper+" "+style.showRegistration :style.registrWrapper }>

            <div className={style.cardhead+" card-header  text-center "}>
                РЕГИСТРАЦИЯ
            </div>
            <div className={" card-body"}>
                <div className="row  justify-content-center">
                    <div className={style.wrapper + " text-center align-self-center"}>

                        <input type="email" className={"form-control"} placeholder={"E-mail адрес"}
                               ref={node => {email = node} }
                               onChange={ ()=>{
                                   onEmailValidate(email.value);
                                   if(email.value.length < 7 ) {
                                       emailLine.style.width = (email.value.length)*12+'%';
                                   } else {
                                       emailLine.style.width = '84%';
                                   }
                               }}
                        />
                        {
                            <div className={validator.isValidMail ?  style.line +" "+ style.greenLine : style.line +" "+ style.redLine} ref={node => {emailLine = node} }></div>
                        }


                        <input type="password" className={style.bottominput+" form-control"} placeholder={"Пароль"}
                               ref={node => {password = node} }
                               onChange={ ()=>{
                                   onPasswordValidate(password.value);
                                   if(password.value.length < 7  ) {
                                       passwordLine.style.width = (password.value.length)*12+'%';
                                   } else {
                                       passwordLine.style.width = '84%';
                                   }
                               }}
                        />
                        {
                            <div className={validator.isValidPassword ?  style.line +" "+ style.greenLine : style.line +" "+style.redLine} ref={node => {passwordLine = node} }></div>
                        }

                        <input type="text" className={style.bottominput+" form-control"} placeholder={"Логин"}
                               ref={node => {login = node} }
                               onChange={ ()=>{
                                   onLoginValidation(login.value);
                                   if(login.value.length < 3  ) {
                                       loginLine.style.width = (login.value.length)*28+'%';
                                   } else {
                                       loginLine.style.width = '84%';
                                   }
                               }}
                        />
                        {
                            <div className={validator.isValidLogin ?  style.line +" "+ style.greenLine : style.line +" "+style.redLine} ref={node => {loginLine = node} }></div>
                        }
                    </div>
                    <div className={"col-12 text-center"}>
                        <button className={style.btn+"  btn btn-primary"}> ОТПРАВИТЬ </button>

                    </div>
                </div>

            </div>

        </div>

    );

};

const mapStateToProps = (state, ownProps) =>  {
    return {
        dispatch: state.dispatch,
        validator: state.validator
    }
};


const mapDispatchToProps = (dispatch, ownProps) => ({

    onEmailValidate: (email) => {
        dispatch(emailValidate('emailValidate', email))
    },
    onLoginValidation: (password) => {
        dispatch(loginValidation( password))
    } ,
    onPasswordValidate: (login) => {
        dispatch(passwordValidate('passwordValidate', login))
    }

});


const SingIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingForm);



export default SingIn;


