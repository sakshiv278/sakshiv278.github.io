//form validation with javascript
function formValidation()
{
    //Get Value
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('msg').value.trim();

    var isValidForm = true;       

    //Validation Conditions here
    if (name.length < 1) {
        alert("Name is Required!");
        var isValidForm = false;
    }       
    else if (email.length < 1) {
        alert("Email is Required!");
        var isValidForm = false;
    } 
    else if (msg.length < 1) {
        alert("Message is Required!");
        var isValidForm = false;
    }
    else
    {
        isValidForm = true;
    }

    return isValidForm;  //if isValidForm is true then form submits else submission is stopped
    
}