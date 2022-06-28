var email_error=document.getElementById("email_error");
var password_error=document.getElementById("password_error");
var submit_error=document.getElementById("submit_error");
var password_strength=document.getElementById("password-text");
function validate_email()
	{ 
        
	var email=document.getElementById("email").value.trim();
    
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

function validate_password()
{
    
    var password=document.getElementById("password").value.trim();
    
    if(password.length==0)
    {
        password_error.innerText="Password is required";
        password_strength.innerHTML='';
        
        return false;
    }
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
    
    var passwordformat =  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$/;
   
    if(!passwordformat.test(password))
    {
        password_error.innerText="Password Minimum 8 characters,at least one uppercase, and one lower case, must contain at least one number";
        return false;
    }
    password_error.innerHTML='<i class="fa fa-check-circle"></i>';
    password_strength.innerHTML='';
    return true;
}
 function validate_form()
 {
    if(!validate_email()||!validate_password())
    {
        submit_error.innerHTML="";
        //setTimeout(function(){submit_error.style.display='none';},3000);
        return false;
    }
 } 
	
	