import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { Home } from './pages';
import { Dialog, Footer, Nav } from './components/home';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Helmet bodyAttributes={{style: 'background-color : #fff4e0'}}/>
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
