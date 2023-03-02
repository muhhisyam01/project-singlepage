import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ListBatik from './Pages/ListBatik';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<ListBatik/>} path='/list-batik' />
    </Routes>
  );
}

export default App;
