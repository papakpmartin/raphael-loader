raphael-loader
==============

RequireJS module to load Raphael without errors.

As part of my learning curve getting into [RequireJS](http://requirejs.org), I was encountering problems loading up [Raphael](http://raphaeljs.com)... I was getting "eve is not defined" at best, nothing at worst.

It turns out that since eve, a dependency of Raphael, can conditionally work in a module environment, the `eve` object gets stashed away to a location other than where Raphael expects (it looks for `eve` in global space).

My goal here is not to modularize Raphael (I'd rather use 3rd party code as-is), but just to be able to easily use Raphael when I'm using RequireJS. So basically, `Raphael` remains a global.

So this module simply loads eve as a dependency to Raphael before loading Raphael.

To use this, I do the following:

1. Get a fresh Raphael by cloning and updating submodules per https://github.com/DmitryBaranovskiy/raphael/#readme
2. Put this project's "raphael-loader" directory in with your scripts (you'll see that raphael-loader assumes a "scripts/libs" structure)
3. Use `"raphael-loader/main"` as a dependency

See the [project page](http://papakpmartin.github.com/raphael-loader/) for an easy example of how I'm using it.