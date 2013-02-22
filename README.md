raphael-loader
==============

RequireJS module to load Raphael without errors.

As part of my learning curve getting into RequireJS, Iwas encounter problems loading up RaphaelJS... I was getting "eve is not defined" at best, nothing at worst.

It turns out that since eve, a dependency of Rapheal, conditionally can work on a module environment, the `eve` object gets stashed away to a location other than where Raphael expects: `window.eve`.

So this modeule simply loads eve as a dependency to Raphael, and writes it to `window.eve` before loading Raphael.

This module simply loads Raphael in global context... I wasn't interested in modularizing Raphael.

To use this, I do the following:

# Get a fresh Raphael by cloning and updating submodules per https://github.com/DmitryBaranovskiy/raphael/#readme
# Clone this project "next to" Raphael (as a sibling)
# Use this as a dependency