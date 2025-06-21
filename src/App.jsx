import React from "react";
import { useState } from 'react';

import RegistrationForm from './components/RegistrationForm';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Futureplans from "./components/Futureplans";
function App() {
  return (
    <>
        <div className="App">
          <h1>Numerology Predictions</h1>
            <Routes>
              <Route path="/" element={<RegistrationForm />} />
              <Route path="/futureplans" element={<Futureplans />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
