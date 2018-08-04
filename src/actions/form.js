export const emailValidate = (type,email)=>(
    {
        type: type,
        email: email,
    }
);


export const passwordValidate = (type,password)=>(
    {
        type: type,
        password: password
    }
);
export const showRegistration = ()=>(
    {
        type: 'showRegistration'
    }
);
export const loginValidation = (login)=>(
    {
        type: 'loginValidation',
        login: login
    }
);