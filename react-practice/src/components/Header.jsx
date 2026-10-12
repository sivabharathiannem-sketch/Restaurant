
import { useState } from "react";
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-dark sticky-top">

  <div className="container-fluid d-flex align-items-center">

    <div className="navbar-brand fw-bold ms-2 px-3 fs-4 text-danger">
      <i className="bi bi-fork-knife text-white"></i> Foodie
    </div>

    <div className="navbar-nav d-flex flex-row align-items-center gap-3 mx-auto">
      <a className="nav-link text-white" href="#">Home</a>
      <a className="nav-link text-white" href="#">Menu</a>
      <a className="nav-link text-white" href="#">About</a>
      <a className="nav-link text-white" href="#">Contact</a>
    </div>


    <button className="btn btn-warning">
      <i className="bi bi-person-fill"></i> Login
    </button>

  </div>

</nav>
  </>
  );
  

  

}

export default Header;
