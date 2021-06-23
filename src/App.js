import "./styles/app.scss";
import Home from '../src/pages/Home'
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
