let Component = () => null;

// it is important to use if statements since webpack
// will add all required modules in a switch in to the bundle
if (__LANGUAGE__ === "en") Component = require(`./en`);

// this should only be in the english version
module.exports = Component;
