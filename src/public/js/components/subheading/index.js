let Component = () => null;

if (__LANGUAGE__ === "en") Component = require(`./en`);

// this should only be in the english version
module.exports = Component;
