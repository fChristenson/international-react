const HeaderSV = require("./sv");
const HeaderEN = require("./en");

const Component = (() => {
  switch (process.env.NODE_ENV) {
    case "sv":
      return HeaderSV;

    case "en":
      return HeaderEN;

    default:
      return HeaderEN;
  }
})();

module.exports = Component;
