import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import SideMenu from "./components/sidemenu/SideMenu";
import Index from "./pages/index";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <div className="content">
        <HashRouter basename="/">
          <div className="side">
            <SideMenu />
          </div>
          <div className="generalcontainer">
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/404" component={Index} />
            {/* <Route path="/about" component={Index} /> */}
            {/* <Route path="/about" component={Index} /> */}
            {/* <Route path="/about" component={Index} /> */}
            {/* <Route path="/about" component={Index} /> */}
            {/* <Route path="/about" component={Index} /> */}
            {/* <Route path="/about" component={Index} /> */}
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
