import { useContext } from "react";
import userContext from "./userContext";
import React from "react";
import "./Homepage.css";

/**Shows homepage
 *
 * useContext= user
 * props=none
 * state=none
 *
 * Routes --> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  console.log("homepage");
  //TODO:import bootstrap, links to buttons style
  return (
    <div className="Homepage">
      {user === null && (
        <div className="Homepage-container">
          <h1 className="Homepage-title">Jobly</h1>
          <p className="Homepage-tagline">
            All the jobs in one, convenient place.
          </p>
          <div>
            <a href="/login" className="btn btn-primary">
              <b>Login</b>
            </a>
            <a href="/signup" className="btn btn-primary">
              <b>Sign up</b>
            </a>
          </div>
        </div>
      )}
      {user !== null && (
        <div>
          <h1 className="Homepage-title">Jobly</h1>
          <p className="Homepage-tagline">
            All the jobs in one, convenient place.
          </p>
          <h2 className="Homepage-welcomeback">
            Welcome Back, {user.firstName}!{" "}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
