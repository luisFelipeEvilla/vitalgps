import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Header from "./partials/header";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header></Header>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
