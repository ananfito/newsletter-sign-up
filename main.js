const button = document.getElementById("subscribe-btn");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/

const validateEmailForm = (e) => {
    e.preventDefault()
    if(email.value.length === 0) {
        console.log("Incorrect Email Length")
        errorMessage.classList.remove("hidden")
    }
    else if(!emailPattern.test(email.value)) {
        console.log('failure')
        errorMessage.classList.remove("hidden")
    } 
    else {
        console.log('success')
        window.location = 'success.html';
    }   
}

button.addEventListener("click", validateEmailForm)
