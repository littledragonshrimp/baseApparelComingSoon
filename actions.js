
function emailChecker(emailInput) {
    //re is just regular expression
    var re = /\S+@\S+\.\S+/;
    //test is just "make this boolean" so the result is true or false
    return re.test(emailInput);
  }
      
// This just adds email input
let emailForm = document.getElementById("email-field");
// console.log(emailForm);



const validateEmail = () => {
    console.log("validated email");

    let emailValue = emailForm.value;

    let result = emailChecker(emailValue);

    if (result === false){
        let errorMessage = document.getElementById("email-error-message");
        errorMessage.className += ' show-error';
    }
}


let submitButton = document.getElementById("email-button");
submitButton.addEventListener('click', validateEmail);

