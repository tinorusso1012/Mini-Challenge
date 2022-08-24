import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light justify-content-center gap-4">
      <Link to="/" className={s.link}>
        <p className={s.p}>Home</p>
      </Link>
      <Link className={s.link} to="/Formulario">
        <p className={s.p}>Formulario</p>{" "}
      </Link>
    </nav>
  );
}

export default Navbar;
