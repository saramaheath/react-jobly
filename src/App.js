import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import { JoblyApi } from "./api";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./userContext";

/**
 * App -- wrapper component
 *
 * App -> UserContext -> {Navigation, RouteList}
 *
 */
function App() {
  console.log("App");
  const [user, setUser] = useState({});
  console.log(user, "USER!!!!!!!");
  const [loginCredentials, setCredentialsForLogin] = useState({});
  const [signupCredentials, setCredentialsForsignup] = useState({});

  //makes call to api to get token for user loggin in
  useEffect(
    function fetchTokenOnLogIn() {
      async function fetchToken() {
        const token = await JoblyApi.login(loginCredentials);
        setUser(loginCredentials);
        console.log(loginCredentials.username, "credentials username");
      }
      fetchToken();
    },
    [loginCredentials]
  );

  //makes call to api to get user data after registration
  
  useEffect(
    function fetchTokenOnSignUp() {
      async function fetchToken() {
        const token = await JoblyApi.signup(signupCredentials);
        console.log("token after signup", token)
        setUser(signupCredentials);
        console.log(signupCredentials.username, "credentials username");
        console.log(signupCredentials, "credentials")
      }
      fetchToken();
    },
    [signupCredentials]
  );


  //makes call to api to get user data after login
  useEffect(
    function fetchUserOnChange() {
      async function fetchUser() {
        const userData = await JoblyApi.getUser(user.username);
        console.log("FETCH USER RESPONSE!!!!", userData);
        setUser(userData);
      }
      fetchUser();
    },
    [user]
  );

  



  function updateCredentialsOnLogin(formData) {
    console.log("update on login credentials *********************");
    setCredentialsForLogin({
      username: formData.username,
      password: formData.password,
    });
  }

  function updateCredentialsOnSignUp(formData) {
    console.log("update on signup credentials *********************");
    setCredentialsForsignup({
      username: formData.username,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    });
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Navigation />
          <RouteList login={updateCredentialsOnLogin} signup={updateCredentialsOnSignUp} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
//export {updateCredentials};
