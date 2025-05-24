// src/components/Sidebar.jsx
import { useState } from "react";

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

      <aside
        className={`bg-white shadow-md w-full md:w-64 p-6 space-y-4 md:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-teal-400 font-bold mb-4">Health<span className="text-slate-800">care.</span></h2>
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-100">
            Dashboard
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-100">
            Analytics
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-100">
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
}
