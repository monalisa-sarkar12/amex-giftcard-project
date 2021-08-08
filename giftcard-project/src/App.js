import React from "react";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import EditCard from "./components/EditCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddCard} />
            <Route path="/edit/:id" component={EditCard} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
