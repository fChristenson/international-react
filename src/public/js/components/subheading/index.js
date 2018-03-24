let Component = () => null;

if (process.env.NODE_ENV === "en") Component = require(`./en`);

// this should only be in the english version
module.exports = Component;
