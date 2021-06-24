import "./styles/app.scss";
import Home from './pages/Home'
import data from './data.json'
import About from "./pages/About";
import Rental from "./components/Rental";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home data={data}/>
        </Route>
        <Route path='/a-propos' exact>
          <About/>
        </Route>
        <Route path='/:id'>
          <Rental/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
