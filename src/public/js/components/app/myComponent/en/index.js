const React = require("react");
const Header = require("../../../header");
const Subheading = require("../../../subheading");

const MyComponentEN = () => {
  return (
    <div>
      <Header />
      <Subheading /> // this version has a subheading
    </div>
  );
};

module.exports = MyComponentEN;
