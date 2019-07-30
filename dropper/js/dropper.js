$(document).ready(function() {

	$(".dropdown-menu a").click(function(){

		if ($(this).text() == "Action") {
			alert("taking action");
		}
		else if ($(this).text() == "Another action") {
			alert("taking another action");
		}
		else if ($(this).text() == "Something else here") {
			alert("something");
		}

		$(".btn:first-child").text($(this).text());
		$(".btn:first-child").val($(this).text());

	});

});