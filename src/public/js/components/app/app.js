const Header = require("../header");
const Subheading = require("../subheading");

require.ensure(["react", "react-dom"], require => {
  const React = require("react");
  const ReactDOM = require("react-dom");

  const App = () => {
    return (
      <div>
        <Header />
        <Subheading />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
