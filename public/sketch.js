$(document).ready(function() {

	function grid() {
		//alert('Making grid...');
		for (var i = 0; i < 2000; i++) {
			if(i % 200 == 0) {
				$("#container").append("<div class='square2'></div>");
			}
			else {
				$("#container").append("<div class='square'></div>");
			};
		};
	};

	function hover() {
		$(".square").hover (
		function() {
			$(this).css("background-color", 'black');
		});
	};

	function multi_hover() {
		$(".square").unbind();
		$(".square").mouseenter (
		function() {
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background-color", hue);
		});
	};


	grid();
	hover();

	$("#reset").click(function() {
		console.log('reset');
		$("#container").children().remove('div');
		grid();
		hover();
	});

	$("#snake").click(function() {
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo(1500, 1);
		});
	});

});//end of doc.ready
