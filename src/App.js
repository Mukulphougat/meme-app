import logo from './logo.svg';
import './App.css';
import Header  from "./Components/Header";
import MainContent from "./Components/MainContent";
import GenerateButton from "./Components/GenerateButton";
import Generated from "./Components/Generated";
function App() {
  return (
    <div className="App">
        <Header />
        {/*<MainContent />*/}
        <GenerateButton />
        <Generated />
    </div>
  );
}

export default App;
