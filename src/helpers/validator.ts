type ValidatorProps = {
    email: string,
    password: string,
}

type OldUserProps = {
    password: string,
}

export function validator(newUserData: ValidatorProps){
    const errorMsg: ValidatorProps = {
        email: "",
        password: "",
    }
    
    if(!newUserData.email){
        errorMsg.email = "Empty field"
    }

    if(!newUserData.password){
        errorMsg.password = "Last Name field cannot be empty"
    }

    if(!newUserData.password){
        errorMsg.password = "Empty password!"
    }

    return errorMsg;
}

export function oldUserValidator(oldUserData: OldUserProps){
    const errorMsg: OldUserProps = {
        password: "", 
    }

    if(!oldUserData.password){
        errorMsg.password = "Empty password!"
    }

    return errorMsg
}