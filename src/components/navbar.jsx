import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-light border-bottom border-danger border-1 shadow">
    <div className="container-fluid">
    <Link className="navbar-brand fw-bolder text-danger" href="#">Batik.id</Link> 
    <ul className="nav">
        <li className="nav-item">
            <Link to="/" className="nav-link link-dark fw-semibold" href="">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/list-batik" className="nav-link link-dark fw-semibold" href="">List Batik</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link link-dark fw-semibold" href="">Contact</a>
        </li>
    </ul>
</div>
</nav>
  );
}
