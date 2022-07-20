import "./App.css";
import Navigation from "./Navigation";
import RouteList from "./RouteList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
