raphael-loader
==============

RequireJS module to load Raphael without errors.

As part of my learning curve getting into [RequireJS](http://requirejs.org), I was encountering problems loading up [Raphael](http://raphaeljs.com)... I was getting "eve is not defined" at best, nothing at worst.

It turns out that since eve, a dependency of Rapheal, can conditionally work in a module environment, the `eve` object gets stashed away to a location other than where Raphael expects, which is `window.eve`.

So this module simply loads eve as a dependency to Raphael before loading Raphael.

This module simply loads Raphael in global context... I wasn't interested in modularizing Raphael.

To use this, I do the following:

1. Get a fresh Raphael by cloning and updating submodules per https://github.com/DmitryBaranovskiy/raphael/#readme
2. Clone this project "next to" Raphael (as a sibling)
3. Use `"raphael-loader"` as a dependency