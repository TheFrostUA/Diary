function createnote()
{
	var userId = document.getElementById('id');
	var title = document.getElementById('title');
	var text = document.getElementById('text');
	var dataString = 'user='+ userId + '&title=' + title + '&text=' + text + '&action=create';
	$.ajax(
		{
			type: "post"
			url: "../php/noteOperator.php"
			data: dataString,
			cache: false,
			success: function(response)
			{
				window.location.replace('../home/index.html');
			}
			else
			{
				alert(response);
			}
		}
	);
	return false;
}

function modifynote()
{
	var noteId = document.getElementById('noteId');
	var userId = document.getElementById('id');
	var title = document.getElementById('title');
	var text = document.getElementById('text');
	var dataString = 'user='+ userId + '&note='+ noteId + '&title=' + title + '&text=' + text + '&action=modify';
	$.ajax(
		{
			type: "post"
			url: "../php/noteOperator.php"
			data: dataString,
			cache: false,
			success: function(response)
			{
				window.location.replace('../home/index.html');
			}
			else
			{
				alert(response);
			}
		}
	);
	return false;
}