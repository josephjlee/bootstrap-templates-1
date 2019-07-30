$(document).ready(function() {

	$(".dropdown-menu a").click(function(){

		if ($(this).text() == "Action") {
			alert("taking action");
		}

		$(".btn:first-child").text($(this).text());
		$(".btn:first-child").val($(this).text());

	});

});