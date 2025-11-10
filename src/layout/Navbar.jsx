import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <div className="navbar-nav">
          <NavLink className="nav-link fw-bold" to="/">Viaggi Boolean</NavLink>
        </div>
      </div>
    </nav>
  );
}