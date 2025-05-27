import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GridViewRounded as GridViewRoundedIcon,
  ManageHistoryOutlined as ManageHistoryOutlinedIcon,
  CalendarMonthTwoTone as CalendarMonthTwoToneIcon,
  AddBoxTwoTone as AddBoxTwoToneIcon,
  DataExplorationTwoTone as DataExplorationTwoToneIcon,
  ChatTwoTone as ChatTwoToneIcon,
  CallTwoTone as CallTwoToneIcon,
  SettingsTwoTone as SettingsTwoToneIcon,
} from "@mui/icons-material";


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

      <aside className={`bg-blue-50 w-full md:w-60 p-6 overflow-hidden md:block ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2">
            <Link to="/" ><span className="hidden md:block text-teal-400 text-center font-bold mb-4 text-[19px]">
              Health<span className="text-slate-800">care.</span>
            </span></Link>
            <nav className="space-y-2">
              <div>
                <p className="text-slate-400 mx-2 text-[12px]">General</p>
                <Link to="/" className="block p-2 rounded hover:bg-gray-100">
                  <GridViewRoundedIcon sx={{ fontSize: 20 }} className="text-indigo-500" /><span className="m-[10px] text-indigo-500 font-bold">Dashboard</span>
                </Link>
                <Link to="/history" className="block p-2 rounded hover:bg-gray-100">
                  <ManageHistoryOutlinedIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">History</span>
                </Link>
                <Link to="/calendar" className="block p-2 rounded hover:bg-gray-100">
                  <CalendarMonthTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Calendar</span>
                </Link>
                <Link to="/appointments" className="block p-2 rounded hover:bg-gray-100">
                  <AddBoxTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Appointments</span>
                </Link>
                <Link to="/statistics" className="block p-2 rounded hover:bg-gray-100">
                  <DataExplorationTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Statistics</span>
                </Link>
              </div>

              <div>
                <p className="text-slate-400 mx-2 text-[12px] mb-0 mt-5">Tools</p>
                <Link to="/chat" className="block p-2 rounded hover:bg-gray-100">
                  <ChatTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Chat</span>
                </Link>
                <Link to="/support" className="block p-2 rounded hover:bg-gray-100">
                  <CallTwoToneIcon sx={{ fontSize: 20 }} /> <span className="m-[10px]">Support</span>
                </Link>
              </div>
            </nav>
          </div>
          <div className="mt-65">
            <Link to="/settings" className="block p-2 rounded hover:bg-gray-100">
              <SettingsTwoToneIcon sx={{ fontSize: 20 }} /> <span className="">Setting</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
