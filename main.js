require.config({
	paths: {
		"eve-loader": "libs/raphael-loader/eve-loader",
		"raphael": "libs/raphael/raphael"
	},
	shim: {
		'raphael': {
			deps: ["eve-loader"],
			exports: "Raphael"
		}
	}
});

require(
	["eve-loader","raphael"],
	function() {}
);


