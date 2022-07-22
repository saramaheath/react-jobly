import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import { JoblyApi } from "./api";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";

/**
 * App -- wrapper component
 *
 * props= none
 * state= 
 * -user: null or {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        isAdmin: boolean,
        application: [...]

      }
 * -token: null or 'token'
 * 
 * App -> UserContext -> {Navigation, RouteList}
 *
 */
function App() {
  console.log("App");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  console.log("user=", user, "token=", token);

  /**makes call to api to get user data, when token state updates, sets state
   * for user
   */
  
  //TODO: try/catch with token. if error clear out token from local storage
  useEffect(
    function fetchUserOnChange() {
      console.log("fetchUserOnChange")
    
      async function fetchUser(username) {
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      }
      if (token !== null) {
        const { username } = jwt_decode(token);
        fetchUser(username);
      }
    },
    [token]
  );

  /**makes call to backend API to sign up a new user 
   * 
   * takes signupInfo (obj) {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }
    generates token that updates in JoblyApi class
    sets token state
  */
  async function signup(signupInfo) {
    const token = await JoblyApi.signup(signupInfo);
    setToken(token);
  }

  /**makes call to backend API to log in an exisiting user 
   * takes loginInfo (obj) {
        username: username,
        password: password,
      }
    generates token that updates in JoblyApi class
    sets token state
  */
  async function login(loginInfo) {
    const token = await JoblyApi.login(loginInfo);
    setToken(token);
  }

  /** logs current user out, clears token and clears user */
  function logout() {
    setUser(null);
    //not sure where clearing token should live?
    JoblyApi.token = null;
    setToken(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Navigation />
          <RouteList login={login} signup={signup} logout={logout} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
