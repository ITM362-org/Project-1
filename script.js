function init(){
	var button = document.getElementById('submit');
	
	function Alert(){
		var firstname = document.forms["signupform"]["firstname_field"].value;
		var lastname = document.forms["signupform"]["lastname_field"].value;
		var email = document.forms["signupform"]["email_field"].value;
		var language = document.forms["signupform"]["language_field"].value;
		
		if (firstname == "")
		{
			alert("Enter a first name");
			return false;
		}
	}
	button.addEventListener('click', Alert);
}
window.addEventListener('load',init);