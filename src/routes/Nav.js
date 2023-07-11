import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

/** Navbar
 * common to every page:
 * Logged in user will see links to main site pages,
 * visitor will see links to login/sigunup form pages
 */

const Nav = ({ logout }) => {
  const { currUser } = useContext(UserContext);
  console.debug("Nav", "currUser=", currUser);

  const loggedInNav = () => {
    return (
      <ul className="navbar-nav">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currUser.first_name || currUser.username}
          </Link>
        </li>
      </ul>
    );
  };

  const loggedOutNav = () => {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">
            Sign up
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <nav className="Nav navbar navbar-expand-md px-3">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
};

export default Nav;
