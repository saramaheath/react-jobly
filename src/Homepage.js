import { useContext } from "react";
import userContext from "./userContext";
import React from "react"

/**Shows homepage
 *
 * Routes --> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  console.log("homepage");
  return (
    <div>
    {user === null && 
    <div>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      <a href="/login" class="btn btn-primary">Log in</a>
      <a href="/signup" class="btn btn-primary">Sign up</a>
      {/* <input type="button" onclick="location.href='/login';" value="Log in"></input>
      <button onclick="location.href='/login'"></button> */}
      </div>}
    {user !== null && 
    <div>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      <h2>Welcome Back, {user.firstName} </h2>
      </div>}
  </div>)
}

export default Homepage;
