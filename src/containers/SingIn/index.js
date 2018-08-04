import React from 'react';
import style from './style.css';
import {connect} from "react-redux";
import {emailValidate,passwordValidate} from "../../actions/form";

const SingForm =({validator, onEmailValidate,onPasswordValidate})=>{
    let email;
    let emailLine;
    let password;
    let passwordLine;
    return(
          <div className={style.singInWrapper}>
             <div className={style.cardhead+" text-center "}>
                       АВТОРИЗАЦИЯ
             </div>
             <div className={"card-body"}>
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

                            {<div className={validator.isValidPassword ?  style.line +" "+ style.greenLine : style.line +" "+style.redLine}
                                   ref={node => {passwordLine = node} }></div>}

                       </div>
                       <div className={"col-12 text-center"}>
                             <button className={style.btn+"  btn btn-primary"}> ВХОД </button>
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
    onPasswordValidate: (password) => {
        dispatch(passwordValidate('passwordValidate', password))
    }

});


const SingIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingForm);



export default SingIn;


