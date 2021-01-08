import { HomePage, TravelMap, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/travelmap" exact component={() => <TravelMap />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;