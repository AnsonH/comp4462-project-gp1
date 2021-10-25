import "./Topbar.css";
import logo from "../../logo.svg";

export default function Topbar() {
  return (
    <header className="topbar">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}
