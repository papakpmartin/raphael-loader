require.config({
	paths: {
		"raphael": "libs/raphael-loader/main"
	}
});

define(
	["raphael"],
	function() {
		/*
		There is no `raphael` object available in here.
		There is just the old fashioned `Raphael` and `eve` globals.
		*/
		
		// draw a smiley face on the test page		
		var paper = Raphael('paper');
		paper.circle(200,200,200).attr({fill:'yellow','stroke-width': 0});
		paper.circle(130,130,20).attr({fill:'black'});
		paper.circle(270,130,20).attr({fill:'black'});
		paper.path('M 90,270 a123,100 0 0,0 220,0').attr({'stroke-width': 16, 'stroke-linecap': 'round'});
	}
);


