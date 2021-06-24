import "./styles/app.scss";
import Home from '../src/pages/Home'
import Header from "./components/Header";
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home data={data}/>
    </div>
  );
}

export default App;
