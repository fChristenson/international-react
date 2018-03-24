let Component = () => null;

if (process.env.NODE_ENV === "sv") {
  Component = require("./sv");
} else {
  Component = require("./en");
}

module.exports = Component;
