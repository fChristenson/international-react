let Component = () => null;

if (process.env.NODE_ENV === "sv") {
  Component = require("./sv");
} else {
  Component = require("./en");
}

// this should be different in sweden but all other markets have the english version
module.exports = Component;
