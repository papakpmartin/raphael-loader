require.config({
	paths: {
		"eve": "libs/raphael/eve/eve"
	}
});

require(
	["eve"],
	function(eve) {
		window.eve = eve;
	}
);