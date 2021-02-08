import { HomePage, TravelMap, Footer, Header } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
     <div className="container">
      <Router>
        <Header />
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