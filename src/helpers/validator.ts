type ValidatorProps = {
    firstName: string,
    lastName: string,
    password: string,
}

type OldUserProps = {
    password: string,
}

export function validator(newUserData: ValidatorProps){
    const errorMsg: ValidatorProps = {
        firstName: "",
        lastName: "",
        password: "",
    }
    
    if(!newUserData.firstName){
        errorMsg.firstName = "First Name field cannot be empty"
    }

    if(!newUserData.lastName){
        errorMsg.lastName = "Last Name field cannot be empty"
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