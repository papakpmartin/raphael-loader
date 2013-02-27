require.config({
	paths: {
		"eve-loader": "libs/raphael-loader/eve-loader", /*  for loading `eve` dependency */
		"raphael.core": "libs/raphael/raphael.core",
		"raphael.svg": "libs/raphael/raphael.svg",
		"raphael.vml": "libs/raphael/raphael.vml"
	},
	shim: {
		'raphael.core': {
			deps: ["eve-loader"]
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
	["raphael.svg", "raphael.vml"],
	function () {}
);
