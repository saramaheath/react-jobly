import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import { JoblyApi } from "./api";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";

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
 * -username: null or 'username'
 * -token: null or 'token'
 * 
 * App -> UserContext -> {Navigation, RouteList}
 *
 */
function App() {
  console.log("App");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  console.log("user=", user, "username=", username, "token=", token);

  /**makes call to api to get user data, when username state updates, sets state
   * for user
   */
  useEffect(
    function fetchUserOnChange() {
      async function fetchUser() {
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      }
      fetchUser();
    },
    [username]
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
    sets username state
    sets token state
  */
  function signup(signupInfo) {
    async function fetchTokenOnSignUp() {
      const token = await JoblyApi.signup(signupInfo);
      setUsername(signupInfo.username);
      setToken(token);
    }
    fetchTokenOnSignUp();
  }

  /**makes call to backend API to log in an exisiting user 
   * takes loginInfo (obj) {
        username: username,
        password: password,
      }
    generates token that updates in JoblyApi class
    sets username state
    sets token state
  */
  function login(loginInfo) {
    async function fetchTokenOnLogin() {
      const token = await JoblyApi.login(loginInfo);
      setUsername(loginInfo.username);
      setToken(token);
    }
    fetchTokenOnLogin();
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
