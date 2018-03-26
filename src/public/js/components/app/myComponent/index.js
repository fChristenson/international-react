let Component = () => null;

// it is important to use if statements since webpack
// will add all required modules in a switch in to the bundle
if (__LANGUAGE__ === "sv") {
  Component = require("./sv");
} else {
  Component = require("./en");
}

// by using a wrapping component we can always trust that it will be there
// and simply load the version we want to use
module.exports = Component;
