import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
