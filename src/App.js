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

  useEffect(
    function fetchUserOnChane() {
      async function fetchUser() {
        const response = await JoblyApi.getUser(user.username);
        setUser({ user: response });
      }
      fetchUser();
    }
    [user]
  );


  return (
    <div className="App">
      <UserContext.Provider value={{user: user}}>
      <BrowserRouter>
        <Navigation />
        <RouteList />
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
