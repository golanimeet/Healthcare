import { useState, useEffect } from "react";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import logo from '../assets/5.png';
import WeeklyCalendar from "./WeeklyCalendar";
const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const barColors = ["bg-gray-300", "bg-cyan-400", "bg-indigo-800"];
const barHeights = [[40, 60, 45], [30, 70, 50], [20, 40, 30], [25, 55, 35], [30, 70, 40], [20, 35, 25], [25, 60, 30],];
const bodyParts = [
  { name: "Healthy Head", top: "5%", left: "42%", width: "16%", height: "10%", icon: "🧠" },
  { name: "Healthy Chest", top: "15%", left: "36%", width: "28%", height: "15%", icon: "❤️" },
  { name: "Healthy Abdomen", top: "32%", left: "38%", width: "24%", height: "12%", icon: " " },
  { name: "Healthy Left Arm", top: "18%", left: "20%", width: "12%", height: "38%", icon: "💪" },
  { name: "Healthy Right Arm", top: "18%", left: "68%", width: "12%", height: "38%", icon: "💪" },
  { name: "Healthy Left Leg", top: "48%", left: "40%", width: "10%", height: "45%", icon: "🦵" },
  { name: "Healthy Right Leg", top: "48%", left: "50%", width: "10%", height: "45%", icon: "🦵" },
];

export default function Dashboard() {
  const [view, setView] = useState("This Week");
  const [hoveredPart, setHoveredPart] = useState(null);

  return (
    <main className="flex-1 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen">
        {/* Left Section */}
        <section className="bg-white p-4 h-full flex flex-col">
          {/* search box */}
          <form className="w-full max-w-2xl mx-auto mt-2.5">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-[12px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search anything..."
                required
              />
              <button type="button" className="absolute end-2.5 bottom-2 cursor-pointer text-indigo-500">
                <NotificationsRoundedIcon />
              </button>
            </div>
          </form>
          {/* dashboard */}
          <div className="flex items-center justify-between mt-5 mb-4">
            {/* Title */}
            <h2 className="text-xl text-indigo-500 font-bold">Dashboard</h2>
            {/* Dropdown */}
            <div className="relative">
              <select value={view} onChange={(e) => setView(e.target.value)} className="rounded-md px-3 py-1 text-sm cursor-pointer">
                <option value="This Week">This Week</option>
                <option value="Month">Month</option>
                <option value="Day">Day</option>
              </select>
            </div>
          </div>
          {/* image section */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:ml-4">
            {/* Image Section */}
            <div className="flex justify-center items-center bg-indigo-50 rounded-2xl p-4 w-full max-w-[500px] mx-auto">

              <div className="relative h-[300px] md:h-[360px] w-auto">
                {/* Image */}
                <img
                  src={logo}
                  alt="Human Anatomy"
                  className="h-full w-auto object-contain select-none pointer-events-none"
                />

                {/* Hotspots */}
                {bodyParts.map((part, idx) => (
                  <div
                    key={idx}
                    className="absolute bg-transparent hover:bg-blue-300/20 rounded-md cursor-pointer transition"
                    style={{
                      top: part.top,
                      left: part.left,
                      width: part.width,
                      height: part.height,
                    }}
                    onMouseEnter={() => setHoveredPart(part.name)}
                    onMouseLeave={() => setHoveredPart(null)}
                  >
                    {hoveredPart === part.name && part.icon && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-2 bg-indigo-600 text-white text-xs rounded shadow">
                        {part.name}{part.icon}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Details Card */}
            <div className="w-full sm:w-[430px] mt-[-20px]">
              <div className="w-full mb-2 bg-indigo-50 text-white rounded-2xl p-3">
                <div className="flex items-center">
                  <span className="text-2xl">
                    <i className="fa-solid fa-lungs text-red-400"></i>
                  </span>
                  <h6 className="text-lg text-black font-semibold mx-4">Lungs</h6>
                </div>
                <p className="text-[12px] mt-1 text-slate-400">Date: 26 May 2025</p>
                <div className="w-full bg-white rounded-full h-2.5 mt-3 mb-1">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="w-full mb-2 bg-indigo-50 text-white rounded-2xl p-3">
                <div className="flex items-center">
                  <span className="text-2xl">🦷</span>
                  <h6 className="text-lg text-black font-semibold mx-4">Teeth</h6>
                </div>
                <p className="text-[12px] mt-1 text-slate-400">Date: 26 May 2025</p>
                <div className="w-full bg-white rounded-full h-2.5 mt-3 mb-1">
                  <div className="bg-emerald-400 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="w-full mb-2 bg-indigo-50 text-white rounded-2xl p-3">
                <div className="flex items-center">
                  <span className="text-2xl">
                    🦴
                  </span>
                  <h6 className="text-lg text-black font-semibold mx-4">Bone</h6>
                </div>
                <p className="text-[12px] mt-1 text-slate-400">Date: 26 May 2025</p>
                <div className="w-full bg-white rounded-full h-2.5 mt-3 mb-1">
                  <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <p className='text-[12px] text-right mt-5 cursor-pointer'>Details <i className="fa-solid fa-arrow-right"></i></p>
            </div>
          </div>

          {/* Activity chart */}
          <div className="p-6 bg-indigo-50 rounded-2xl mt-4 shadow-md w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-blue-900">Activity</h2>
              <span className="text-sm text-gray-500">3 appointment on this week</span>
            </div>
            <div className="flex justify-between items-end">
              {days.map((day, i) => (
                <div key={day} className="flex flex-col items-center space-y-1">
                  <div className="flex flex-col justify-end items-center h-23 space-y-1">
                    {barHeights[i].map((height, j) => (
                      <div
                        key={j}
                        className={`w-1.5 ${barColors[j]} rounded`}
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="bg-indigo-50 p-4 h-full flex flex-col">
          {/* Top-right avatar and button */}
          <div className="top-4 gap-3 right-4 flex items-center ml-auto">
            <button className="bg-cyan-500 rounded-[4px] cursor-pointer">
              <i className="text-white fa-solid fa-user-tie fa-md m-[6px] mx-2"></i>
            </button>
            <button className="cursor-pointer">
              <i className="text-indigo-500 fa-solid fa-square-plus fa-2xl"></i>
            </button>
          </div>


          {/* Calendar */}


          <WeeklyCalendar />

          {/* Time Slots */}
          <div className="grid grid-cols-7 mt-3 m-1.5 text-center gap-4">
            {["10:00", "08:00", "12:00", "10:00", "----", "12:00", "09:00"].map(
              (time, index) => (
                <div
                  key={index}
                  className={`rounded-lg text-center ${time === "09:00" || time === "12:00" ? "bg-indigo-500 text-white text-[14px]" : "bg-gray-100"
                    }`}
                >
                  {time}
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-7 m-1.5 text-center gap-4">
            {["10:00", "09:00", "----", "11:00", "14:00", "14:00", "10:00"].map(
              (time, index) => (
                <div
                  key={index}
                  className={`rounded-lg text-center ${time === "09:00" || time === "11:00" || time === "12:00" ? "bg-indigo-500 text-white text-[14px]" : "bg-gray-100"
                    }`}
                >
                  {time}
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-7 m-1.5 text-center gap-4">
            {["12:00", "10:00", "13:00", "----", "16:00", "15:00", "11:00"].map(
              (time, index) => (
                <div
                  key={index}
                  className={`rounded-lg text-center ${time === "08:00" || time === "09:00" || time === "14:00" ? "bg-indigo-500 text-white text-[14px]" : "bg-gray-100"
                    }`}
                >
                  {time}
                </div>
              )
            )}
          </div>

          <div className="mt-6 font-sans">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6">
                <div className="w-1/2 bg-indigo-500 text-white rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold">Dentist</h6>
                    <span className="text-xl">🦷</span>
                  </div>
                  <p className=" mt-1">09:00 - 11:00</p>
                  <p className="text-sm">Dr. Cameron Williamson</p>
                </div>
                <div className="w-3/4 bg-violet-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold">Physiotherapy Appointment</h6>
                    <span className="text-xl">💪</span>
                  </div>
                  <p className="text-gray-600 mt-1">11:00 - 12:00</p>
                  <p className="text-sm text-gray-500">Dr. Kevin Djonas</p>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h6 className="font-bold m-2">The Upcoming Schedule</h6>
              <p className="text-slate-400 m-2">On Thursday</p>
              <div className="font-sans">
                <div className="max-w-4xl mx-auto">
                  <div className="flex gap-6">
                    <div className="w-1/1 bg-violet-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <h6 className="font-semibold">Health checkup complete</h6>
                        <span className="text-xl">💉</span>
                      </div>
                      <p className="text-gray-600 mt-1">11:00 AM</p>
                    </div>
                    <div className="w-3/4 bg-violet-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <h6 className="font-semibold">Ophthalmologist</h6>
                        <span className="text-xl">👁️</span>
                      </div>
                      <p className="text-gray-600 mt-1">14:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 m-2">On Saturday</p>
              <div className=" font-sans">
                <div className="max-w-4xl mx-auto">
                  <div className="flex gap-6">
                    <div className="w-[200px] bg-violet-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <h6 className="font-semibold">Cardiologist</h6>
                        <span className="text-xl">❤️</span>
                      </div>
                      <p className="text-gray-600 mt-1">12:00 AM</p>
                    </div>
                    <div className="w-[200px] bg-violet-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <h6 className="font-semibold">Neurologist</h6>
                        <span className="text-xl"><i className="fa-solid fa-user-doctor"></i></span>
                      </div>
                      <p className="text-gray-600 mt-1">16:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>

  );
}

