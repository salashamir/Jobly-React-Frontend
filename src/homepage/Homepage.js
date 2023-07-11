import "./Homepage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

/** Jobly homepage
 *
 * Displays welcome message or login/regsiter buttons
 *
 * Route: /
 *
 * Routes -> Homepage
 */

const Homepage = () => {
  const { currUser } = useContext(UserContext);
  console.debug("Homepage", "currUser=", currUser);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold text-white">Jobly</h1>
        <p className="lead text-light">
          All the jobs in one, convenient place.
        </p>
        {currUser ? (
          <h2 className="lead-3 text-white">
            Welcome back, {currUser.firstName || currUser.username}!
          </h2>
        ) : (
          <div className="d-flex gap-3 justify-content-center">
            <Link className="btn btn-primary font-weight-bold mr-3" to="/login">
              Log in
            </Link>
            <Link
              className="btn btn-success font-weight-bold mr-3"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
