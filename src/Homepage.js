import { useContext } from "react";
import userContext from "./userContext";
import React from "react";

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
        <div>
          <h1>Jobly</h1>
          <h3>All the jobs in one, convenient place.</h3>

          <a href="/login" className="btn btn-primary">
            Log in
          </a>
          <a href="/signup" className="btn btn-primary">
            Sign up
          </a>
        </div>
      )}
      {user !== null && (
        <div>
          <h1>Jobly</h1>
          <h3>All the jobs in one, convenient place.</h3>
          <h2>Welcome Back, {user.firstName} </h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
