import "./App.css";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
