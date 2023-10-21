function Validation(values){
    let error= {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if(values.name === "") {
        error.name = "Name is required"
    }
    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email is invalid"
    }
    else {
        error.email = ""
    }

    if(values.message === "") {
        error.message = "Message is required"
    }
    else {
        error.message = ""
    }
    return error;
}

export default Validation;