$(document).ready(function() {

	$("#selectTest").change(function(){
		let option = $("#selectTest option:selected").text();
		if (option == "option 1") {
			$(".optionDiv").text("selected option 1");
		}
		else if (option == "option 2") {
			$(".optionDiv").text("selected option 2");
		}
		else if (option == "option 3") {
			$(".optionDiv").text("selected option 3");
		}
		else if (option == "option 4") {
			$(".optionDiv").text("selected option 4");
		}
		else if (option == "option 5") {
			$(".optionDiv").text("selected option 5");
		}
	});

});