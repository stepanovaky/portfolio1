import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import NotFound from "./NotFound";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Opening from "./Opening";

function App() {
  const history = useHistory();

  const redirect = () => {
    setTimeout(history.push("/homepage"), 3500);
  };
  return (
    <div className="slide-in-left">
      <Router>
        <Switch>
          <Route exact path="/" component={Opening} />
          <Route path="/homepage" component={Main} />
          {redirect}
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
