$(document).ready(function() {

	function grid() {
		//alert('Making grid...');
		for (var i = 0; i < 256; i++) {
			if(i % 17 == 0) {
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
			$(this).css("background-color", 'blue');
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
		$("#container").children().remove('div');
		grid();
		hover();
	});

	$("#disco").click(function() {
		$(".square").each(function() {
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background-color", hue)
			}		
		);
		hover();
	});

	$("#multi").click(function() {
		multi_hover();
	});

	$("#snake").click(function() {
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo(1500, 1);
		});
	});

});
