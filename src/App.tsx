import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/pageA" />;
            }}
          />
          <Route path={"/pageA"} component={PageA} />
          <Route path={"/pageB"} component={PageB} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
