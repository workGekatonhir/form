import React from 'react';
import { connect } from 'react-redux';
import {passwordValidate, showRegistration} from '../actions/form';
import style from './style.css';
import SingIn from '../containers/SingIn/';
import Registration from '../containers/Registration/';
import validator from "../reducers/validator";



const formWrapper =({validator,onShowRegistration})=>{

        return (
            <div className="container h-100">
                <div className ="row h-100  justify-content-center" >
                    <div className={style.formwrapper+"   align-self-center"}>

                      <SingIn />
                      <Registration />
                        <div className={validator.showRegistration ? style.trianglewrapper+"  "+ style.triangleBottom : style.trianglewrapper} onClick={()=>{
                            console.log(validator);
                            onShowRegistration();
                        }}>
                            <div className={style.triangle}>
                                <div className={style.left}></div>
                                <div className={style.right}></div>
                            </div>

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

    onShowRegistration: () => {
        dispatch(showRegistration())
    }

});


const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(formWrapper);


export default Form;