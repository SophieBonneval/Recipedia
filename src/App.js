import "./App.css";
import Header from "./header/Header";

function App() {
  return (
    <div className="App" data-testid="test-greeting">
      <Header />
      <p>Hello world</p>
    </div>
  );
}

export default App;
