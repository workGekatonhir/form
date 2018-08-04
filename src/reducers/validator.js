
const initialState={
    isValidMail : false,
    isValidPassword : false,
    isValidLogin : false,
    showRegistration : false
};

const validator  =(state = initialState, action)=>{
    switch (action.type){
        case 'emailValidate':     return mailValidation(state,action.email);
        case 'passwordValidate': return passwordValidation(state,action.password);
        case 'loginValidation': return loginValidation(state,action.login);
        case 'showRegistration': return showRegistration(state);
        default: return state;
    }
};




const mailValidation = (state,email)=> {
    let expr = new RegExp(/[А-Яа-я=,?'":;%5\$#!№`\\}\]\{\[\/^&()*+]/);

    if(email.match( /.+@.+\..+/i) && email.length>7 && !expr.test(email)) {
        return {
            ...state,
            isValidMail : true,
        };
    }
    return {
        ...state,
        isValidMail : false,
    };

};


const  passwordValidation =  (state, password) => {

    let expr = new RegExp(/[А-Яа-я@\-=,.?'":;%5\$#!№`\\}\]\{\[\/^&()*+]/);

    if(!expr.test(password) ) {
        return {
            ...state,
            isValidPassword : true,
        };
    }
    return {
        ...state,
        isValidPassword : false,
    };

};

const  showRegistration =  (state) => {

    return {
        ...state,
        showRegistration : !state.showRegistration
    };

};

const  loginValidation =  (state, login) => {

    let expr = new RegExp(/[@\-=,.?'":;%5\$#!№`\\}\]\{\[\/^&()*+_]/);

    if(!expr.test(login) ) {
        return {
            ...state,
            isValidLogin : true,
        };
    }
    return {
        ...state,
        isValidLogin : false,
    };
};



export default validator;