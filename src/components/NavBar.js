import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = ['/movies', '/directors','/actors']
  return (
  <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
              <NavLink to="/">Home</NavLink>
             
              </li>
              <li>
              <NavLink to="/actors">Actors</NavLink>
              </li>
              <li>
              <NavLink to="/directors">Directors</NavLink>
              </li>
              <li>
              <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>

        </nav>
  </div>

  )
}

export default NavBar;
