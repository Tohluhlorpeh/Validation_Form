@import url('https://code.jquery.com/jquery-3.5.1.min.js');
@import url('https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js');

<script type="text/javascript">

function validate()
{
	var username = document.getElementById("uname");
	var email = document.getElementById("email");
	var password = document.getElementById("pass");
	var confirm_password = document.getElementById("confirm_pass");


	if(uname.value.trim()=="" ||email.value=="" ||password.value=='')
	{
		alert("Blank Username");
		return false;
	}
	else if(email.value.trim()=="")
	{
		alert("Blank email");
		return false;
	}
	else if(password.value.trim().=="")
	{
		alert("Blank Password");
		return false;
	}
	else if(password.value.trim().length<5)
	{
		alert("Password too short");
		return false;
	}
	else{
		return true;
	}
	const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", toggleClicked);

function toggleClicked() {
  password.classList.toggle("visible");
  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
