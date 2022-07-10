import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { Vote } from "./components/Vote";
import { Home } from "./components/Home";
import { add as Add } from "./components/add";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/vote' component={Vote} exact />
      <Route path='/Add' component={Add} exact></Route>
      <Route>
        <Redirect to={"/"}></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
