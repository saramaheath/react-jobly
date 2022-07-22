import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import userContext from "./userContext";

/**Navbar for whole site
 *
 * App --> Navigation
 */
function Navigation() {
  console.log("Navigation");
  const { user } = useContext(userContext);
  console.log('userContext user=', user )
  return (
    <nav className="navbar">
      {user === null && (
        <div>
          <NavLink className="NavJobly" to="/">
            Jobly
          </NavLink>
          <NavLink className="NavLink" to="/login">
            Login
          </NavLink>
          <NavLink className="NavLink" to="/signup">
            Sign Up
          </NavLink>
        </div>
      )}
      {user && (
        <div>
          <NavLink className="NavJobly" to="/">
            Jobly
          </NavLink>
          <NavLink className="NavLink" to="/companies">
            Companies
          </NavLink>
          <NavLink className="NavLink" to="/jobs">
            Jobs
          </NavLink>
          <NavLink className="NavLink" to="/logout">
            Log Out {user.username}
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
