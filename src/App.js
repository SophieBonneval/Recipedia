import React from 'react'
import "./App.css";
import Header from "./header/Header";
import Searchbar from './searchbar/Searchbar'


function App() {
  return (
    <div className="App" data-testid="test-greeting">
      <Header />
      <Searchbar/>
      <p>Hello world</p>
    </div>
  );
}

export default App;
