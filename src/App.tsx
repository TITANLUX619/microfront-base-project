import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

interface Props {
  basename: string;
}

const App: React.FC<Props> = ({ basename }) => {
  console.log("LOADING MICROFRONT", basename);

  return (
    <div className="App">
      <Router basename={basename}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              console.log("REDIRECTING");
              return <Redirect to="/pageA" />;
            }}
          />
          <Route path={"/pageA"} component={PageA} />
          <Route path={"/pageB"} component={PageB} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
