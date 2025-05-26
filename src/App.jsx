import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {

  return (
   <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
