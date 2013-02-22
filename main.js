require.config({
	paths: {
		"eve": "libs/raphael/eve/eve",
		"raphael": "libs/raphael/raphael"
	},
	shim: {
		'eve': {
			exports: "eve"
		},
		'raphael': {
			deps: ["eve"],
			exports: "Raphael"
		}
	}
});

define(
	["raphael"],
	function() {}
);


