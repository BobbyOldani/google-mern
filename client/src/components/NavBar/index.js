import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <Link to="/">
  <a class="navbar-brand" href="#">Search</a>
  </Link>
  <Link to="/saved">
  <a class="navbar-brand" href="#">Saved</a>
  </Link>
</nav>
    )
}

export default NavBar;