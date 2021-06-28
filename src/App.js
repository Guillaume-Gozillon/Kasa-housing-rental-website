import "./styles/app.scss"
import Home from './pages/Home'
import data from './data.json'
import About from "./pages/About"
import Rental from "./pages/Rental"
import { Switch, Route } from "react-router"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact >
          <Home data={data}/>
        </Route>
        <Route path='/a-propos' exact >
          <About/>
        </Route>
        <Route path='/rental/:id' >
          <Rental/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
