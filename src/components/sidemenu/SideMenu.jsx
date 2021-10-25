import { Link } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="sidemenuitem">Home</div>
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <div className="sidemenuitem">About</div>
      </Link>
    </div>
  );
}
