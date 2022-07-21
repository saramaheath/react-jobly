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
  const [credentials, setCredentials] = useState({});

  //makes call to api to get user data after login
  useEffect(
    function fetchUserOnChange() {
      async function fetchUser() {
        //TODO: user not response 
        const response = await JoblyApi.getUser(user);
        console.log("FETCH USER RESPONSE!!!!", response);
        setUser({ user: response });
      }
      fetchUser();
    },
    [user]
  );

  //makes call to api to get token for user loggin in
  useEffect(
    function fetchTokenOnLogIn() {
      async function fetchToken() {
        const response = await JoblyApi.login(credentials);
        JoblyApi.token = response;
        console.log("TOKEN RESPONSE!!!!!", response);
        setUser(credentials.username);
        console.log(credentials.username, "credentials username");
      }
      fetchToken();
    },
    [credentials]
  );

  function updateCredentials(formData) {
    console.log("update credentials *********************");
    setCredentials({
      username: formData.username,
      password: formData.password,
    });
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Navigation />
          <RouteList updateCredentials={updateCredentials} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
//export {updateCredentials};
