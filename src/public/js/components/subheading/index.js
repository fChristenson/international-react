let Component = () => null;

if (process.env.NODE_ENV === "en") Component = require(`./en`);

module.exports = Component;
