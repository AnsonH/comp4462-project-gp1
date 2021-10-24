import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HashRouter basename="/">
        <Route exact path="/" component={Index} />
        <Route path="/about" component={Index} />
        <Route path="/404" component={Index} />
        {/* <Route path="/about" component={Index} /> */}
        {/* <Route path="/about" component={Index} /> */}
        {/* <Route path="/about" component={Index} /> */}
        {/* <Route path="/about" component={Index} /> */}
        {/* <Route path="/about" component={Index} /> */}
        {/* <Route path="/about" component={Index} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
