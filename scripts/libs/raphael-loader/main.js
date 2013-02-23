require.config({
	paths: {
		"e": "libs/raphael-loader/e", /*  for loading `eve` dependency */
		"raphael.core": "libs/raphael/raphael.core",
		"raphael.svg": "libs/raphael/raphael.svg",
		"raphael.vml": "libs/raphael/raphael.vml"
	},
	shim: {
		'raphael.core': {
			deps: ["eve"]
		},
		'raphael.svg': {
			deps: ["raphael.core"]
		},
		'raphael.vml': {
			deps: ["raphael.core"]
		}
	}
});

define(
	["e", "raphael.svg", "raphael.core"],
	function() {}
);


