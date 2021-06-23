import "./styles/app.scss";
import Home from '../src/pages/Home'
import Nav from "./components/Header";
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home data={data}/>
    </div>
  );
}

export default App;
