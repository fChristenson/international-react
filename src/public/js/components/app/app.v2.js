const MyComponent = require("./myComponent");

require.ensure(["react", "react-dom"], require => {
  const React = require("react");
  const ReactDOM = require("react-dom");

  const App = () => {
    return (
      <div>
        <MyComponent /> // this is always here
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
