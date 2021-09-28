import { Route, Switch } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/movies/:id">
        <SingleMovie />
      </Route>

      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
