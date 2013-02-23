require.config({
	paths: {
		"eve": "libs/raphael/eve/eve"
	},
	shim: {
		'eve': {
			exports: "eve"
		}
	}
});

define(
	["eve"],
	function(eve) {
		window.eve = eve;
	}
);


