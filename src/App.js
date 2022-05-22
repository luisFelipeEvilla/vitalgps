import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Header from "./partials/header";

// Screens
import HomeScreen from "./pages/home";
import DetailsScreen from "./pages/details";
import AboutUsScreen from "./pages/about";
import ContactScreen from "./pages/contact";
import LoginScreen from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header></Header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<HomeScreen/>}></Route>
              <Route path="/about" exact={true} element={<AboutUsScreen/>}></Route>
              <Route path="/contact" exact={true} element={<ContactScreen/>}></Route>
              <Route path="/login" exact={true} element={<LoginScreen/>}></Route>
              <Route path="/center/:nit" element={<DetailsScreen/>}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
