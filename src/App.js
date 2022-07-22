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
 * App -> UserContext -> {Navigation, RouteList}
 *
 */
function App() {
  console.log("App");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState({});
  console.log(user, "USER!!!!!!!");



//makes call to api to get user data, when username state updates
  useEffect(
    function fetchUserOnChange() {
      async function fetchUser() {
        const userData = await JoblyApi.getUser(username);
        console.log("FETCH USER RESPONSE!!!!", userData);
        setUser(userData);
      }
      fetchUser();
    },
    [username]
  );

  /**makes call to backend API to sign up a new user 
   * takes formData (obj) {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }
    generates token that updates in JoblyApi class
    sets username state
  */
  function signup(formData) {
    async function fetchTokenOnSignUp() {
      const signupInfo = {
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      const token = await JoblyApi.signup(signupInfo);
      console.log("token after signup", token);
      setUsername(signupInfo.username);
      console.log(signupInfo.username, "signup username");
    }
    fetchTokenOnSignUp();
  }

  /**makes call to backend API to log in an exisiting user 
   * takes formData (obj) {
        username: username,
        password: password,
      }
    generates token that updates in JoblyApi class
    sets username state
  */
  function login(formData) {
    async function fetchTokenOnLogin() {
      const loginInfo = {
        username: formData.username,
        password: formData.password,
      };
      await JoblyApi.login(loginInfo);
      setUsername(loginInfo.username);
      console.log(loginInfo, "login info");
    }
    fetchTokenOnLogin();
  }

  function logout() {
      setUser(null);
      JoblyApi.token = null;
      console.log(user, "user after logout");
    }
    

  console.log(username, "username");

  

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
