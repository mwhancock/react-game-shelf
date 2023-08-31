import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import { Home } from './pages';
import { Dialog, Footer, Nav } from './components/home';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Nav />
      <main className="container">
        <Dialog />
        <Routes>
            <Route path="/" element={< Home />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
