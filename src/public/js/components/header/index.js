let Component = () => null;

// it is important to use if statements since webpack
// will add all required modules in a switch in to the bundle
if (__LANGUAGE__ === "sv") {
  Component = require("./sv");
} else {
  Component = require("./en");
}

// this should be different in sweden but all other markets have the english version
module.exports = Component;
