import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Calendar from './components/Calendar';
import Appointments from './components/Appointments';
import Statistics from './components/Statistics';
import Chat from './components/Chat';
import Support from './components/Support';
import Settings from './components/Settings';


function App() {

  return (
   
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
          <Routes>
             <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
   </div>
  )
}

export default App
