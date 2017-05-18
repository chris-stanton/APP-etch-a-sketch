
$(document).ready(function() {

	grid();
	hover();

	function grid() {
		for (var i = 0; i < 11178; i++) {
			$("#container").append("<span class='square'></span>");
		};//end for
	};//end of grid()

	function hover() {
		$(".square").hover (
		function() {
			$(this).css("background-color", 'black');
		});
	};//end of hover()

	$("#black").click(function() {
		$("#container").children().remove('span');
			grid();
			hover();
	});//end of button click

	$("#chase").click(function() {
		$("#container").children().remove('span');
			grid();
			hover();
				$(".square").unbind();
				$(".square").hover(function() {
					$(this).css("opacity", 0);
				}, function () {
					$(this).fadeTo(1500, 1);
				});
	});//end of button click

	$("#reset").click(function() {
		console.log('reset');
		$("#container").children().remove('span');
			grid();
			hover();
	});//end of button click

});//end of doc.ready
