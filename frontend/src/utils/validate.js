 export const checkValidData = (emailValue,passwordValue) =>{

    const isemail = 
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(emailValue)

    const ispass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(passwordValue)

    if(!isemail){
        return "email not vaild"
    }
    
    else if(!ispass){
        return "password not vaild"
    }
    return null

}