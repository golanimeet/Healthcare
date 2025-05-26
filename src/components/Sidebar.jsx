// src/components/Sidebar.jsx
import { useState } from "react";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import DataExplorationTwoToneIcon from '@mui/icons-material/DataExplorationTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4 bg-white shadow flex justify-between items-center">
        <span className="font-bold text-teal-400">Health<span className="text-slate-800">care.</span></span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

   {/* <aside className="bg-white shadow-md w-full md:w-55 p-6 md:block overflow-hidden"> */}
    <aside className={`bg-blue-50 shadow-md w-full md:w-55 p-6 overflow-hidden md:block ${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto pr-2">
          <h2 className="text-teal-400 text-center font-bold mb-4 text-[19px]">
            Health<span className="text-slate-800">care.</span>
          </h2>
          <nav className="space-y-2">
            <div>
              <p className="text-slate-400 mx-2 text-[12px]">General</p>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <GridViewRoundedIcon sx={{ fontSize: 20 }} className="text-indigo-500"/><span className="m-[10px] text-indigo-500 font-bold">Dashboard</span>
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <ManageHistoryOutlinedIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">History</span>
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <CalendarMonthTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Calendar</span>
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <AddBoxTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Appointments</span>
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <DataExplorationTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Statistics</span>
              </a>
            </div>

            <div>
              <p className="text-slate-400 mx-2 text-[12px] mb-0 mt-5">Tools</p>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <ChatTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Chat</span>
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-100">
                <CallTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Support</span>
              </a>
            </div>
          </nav>
        </div>
        <div className="pb-9">
          <a href="#" className="block p-2 rounded hover:bg-gray-100">
            <SettingsTwoToneIcon sx={{ fontSize: 20 }} /> <span className="">Setting</span>
          </a>
        </div>
      </div>
    </aside>

    </>
  );
}
