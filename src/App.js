import React from 'react'
import "./App.css";
import Header from "./header/Header";
import Api from './api/Api'


function App() {
  return (
    <div className="App" data-testid="test-greeting">
      <Header />
      <Api />
      <p>Hello world</p>
    </div>
  );
}

export default App;
