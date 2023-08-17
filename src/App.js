import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import { Home } from './pages';
import { Dialog } from './components/home';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <main className="grid-box main-grid">
        <Dialog />
        <Routes>
            <Route path="/" element={< Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
