function login()
{
	if (validate())
	{
		var surname = document.getElementById('surnameTb').value;
		var name = document.getElementById('nameTb').value;
		var password = document.getElementById('passwordTb').value;
		var dataString = 'action=login&surname=' + surname + '&name=' + name + '&password=' + password;
		//alert(dataString);
		$.ajax(
		{
			type: "post",
			url: "php/index_controller.php",
			data: dataString,
			cache: false,
			success: function(response)
			{
				if (response == "OK")
				{
					window.location.replace('../home/index.html');
				}
				else
				{
					document.getElementById('errorDiv').innerHTML = response;
				}
			},
			error: function(response)
			{
				 document.getElementById('errorDiv').innerHTML = response;
			}
		});
	}
	return false;
}

function validate()
{
	var surnameTb = document.getElementById('surnameTb');
	if (surnameTb.value == "")
	{
		surnameTb.focus();
		document.getElementById('errorDiv').innerHTML = "Input your surname to login.";
		return false;
	}
	
	var nameTb = document.getElementById('nameTb');
	if (nameTb.value == "")
	{
		nameTb.focus();
		document.getElementById('errorDiv').innerHTML = "Input your name to login.";
		return false;
	}
	
	var passwordTb = document.getElementById('passwordTb');
	if (passwordTb.value == "")
	{
		passwordTb.focus();
		document.getElementById('errorDiv').innerHTML = "Input your password to login.";
		return false;
	}
	
	return true;
}