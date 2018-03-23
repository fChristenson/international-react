const React = require("react");
const SubheadingEN = require("./en");

const Component = (() => {
  switch (process.env.NODE_ENV) {
    case "en":
      return SubheadingEN;

    default:
      return () => null;
  }
})();

module.exports = Component;
