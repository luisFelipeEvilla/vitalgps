import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Header from "./partials/header";

// Screens
import HomeScreen from "./pages/home";
import DetailsScreen from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header></Header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<HomeScreen/>}></Route>
              <Route path="/center/:nit" element={<DetailsScreen/>}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
