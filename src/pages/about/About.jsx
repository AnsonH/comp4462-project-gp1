import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>COMP4462 Project Group 1</div>
      <p>
        <Link to={"/"}>Home</Link>
      </p>
      <p>
        <Link to={"/404"}>404</Link>
      </p>
    </>
  );
}
