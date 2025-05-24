import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {

  return (
   <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
