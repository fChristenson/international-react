const Header = require("../header");
const Subheading = require("../subheading");
const Paragraph = require("../paragraph");

require.ensure(["react", "react-dom"], require => {
  const React = require("react");
  const ReactDOM = require("react-dom");

  const App = () => {
    return (
      <div>
        <Header /> // this is different for everyone but it is always here
        <Subheading /> // this could be here or it could not be here
        <Paragraph /> // this is the same for everyone
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
