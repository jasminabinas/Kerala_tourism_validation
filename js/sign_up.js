var name_error=document.getElementById("name_error");
var email_error=document.getElementById("email_error");
var phone_no_error=document.getElementById("phone_no_error");
var password_error=document.getElementById("password_error");
var con_password_error=document.getElementById("con_password_error");
var password_strength=document.getElementById("password-text");
function validate_name()
{
    var name=document.getElementById("name").value;
    if(name.length==0)
    {
        name_error.innerText="Name is required";
        name_error.color="red";
        return false; 
    }
    var Regexp_name = /^[a-zA-Z ]{2,30}$/;
    if(!Regexp_name.test(name))
    {
        name_error.innerText="Enter a valid Name";
        return false;   
    }
    name_error.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;
}
function validate_email()
{
    var email=document.getElementById("email").value;
    if(email.length==0)
    {
        email_error.innerText="Email is required";
         return false; 
    }
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailformat.test(email))
    {
        email_error.innerText="Enter a Valid Email";
        return false;
    }
    email_error.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;

}

function validate_phone_no()
{
    var phone_no=document.getElementById("phone_number").value;
    
    if(phone_no.length==0)
    {
        phone_no_error.innerText="Phone Number is required";
         return false; 
    }
        var Regexp_phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!Regexp_phone.test(phone_no)) {
        phone_no_error.innerText="Phone number Validation Accept numbers only. Should contain 10 numbers. Should accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        return false;
    }
    
    
    phone_no_error.innerHTML='<i class="fa fa-check-circle"></i>';
    return true; 
}

function validate_signup_pwd()
{
var password=document.getElementById("pwd_signup").value;

if(password.length==0)
{
    password_error.innerText="Enter Password";
    password_strength.innerHTML='';
    return false;   
}

// Create an array and push all possible values that you want in password
var matchedCase = new Array();

matchedCase.push("[A-Z]");      // Uppercase Alpabates
matchedCase.push("[0-9]");      // Numbers
matchedCase.push("[a-z]");     // Lowercase Alphabates

// Check the conditions
var ctr = 0;
for (var i = 0; i < matchedCase.length; i++) {
    if (new RegExp(matchedCase[i]).test(password)) {
        ctr++;
    }
}
// Display it

var strength = "";
switch (ctr) {
    case 0:
    
    case 1:
        strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
        
        break;
    case 2:
        strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
       
        break;
    case 3:
        strength =  "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
       
        break;
}
password_strength.innerHTML = strength;

var regexp_password =  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$/;
   
    if(!regexp_password.test(password))
    {
        password_error.innerText="Password Minimum 8 characters,at least one uppercase, and one lower case, must contain at least one number";
        return false;
    }
    password_error.innerHTML='<i class="fa fa-check-circle"></i>';
    password_strength.innerHTML="";
    return true;
}

function validate_conpassword()
{
    var old_password=document.getElementById("pwd_signup").value;
    var con_password=document.getElementById("con_password").value;
    if(con_password==0)
    {
        con_password_error.innerText="Enter Password again";
        return false;
    }
    if(con_password!=old_password)
    {
        con_password_error.innerText="new password is not match with old one";
        return false;
    }
    con_password_error.innerHTML='<i class="fa fa-check-circle"></i>';
        return true;
}

function validate_signup()
{
    if(!validate_name()||!validate_email()||!validate_phone_no()||!validate_signup_pwd()||!validate_conpassword())
    {
        return false;

    }
}