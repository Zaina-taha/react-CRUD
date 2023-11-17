export function userValidationData(user) {

    const error={};

    if(user.name.trim()==""){
        error.name="username is required";
    }
    else if(user.name.trim().length<3){
        error.name="username must be 3 characters at least";
    }

    if(user.email.trim()==""){
        error.email="email is required";
    }else if(user.email.trim().length<10){
        error.email="email must be at least 10 charachter";
    }
    
    if(user.password.trim()==""){
        error.password="password is required";
    }
    else if(user.password.trim().length<8){
        error.password="password at least must be 8 charachters";
    }
    return error;
}