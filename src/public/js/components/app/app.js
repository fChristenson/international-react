const React = require("react");
const ReactDOM = require("react-dom");
const Header = require("../header");
const Subheading = require("../subheading");

const App = () => {
  return (
    <div>
      <Header />
      <Subheading />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
