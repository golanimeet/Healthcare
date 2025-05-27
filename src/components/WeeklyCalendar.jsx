import { useState, useEffect } from "react";

export default function WeeklyCalendar() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset + weekOffset * 7);

    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      week.push(date);
    }

    setWeekDates(week);
  }, [weekOffset]);

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayDate = new Date().toDateString();

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-6 mb-3 px-2">
        <button
          className="text-lg cursor-pointer"
          onClick={() => setWeekOffset((prev) => prev - 1)}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2 className="text-md font-semibold">
           {weekDates[0]?.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
        </h2>
        <button
          className="text-lg cursor-pointer"
          onClick={() => setWeekOffset((prev) => prev + 1)}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 text-center gap-4">
        {dayNames.map((day, index) => (
          <div key={index} className="font-medium text-[13px]">{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center gap-4 mt-2">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`text-xl rounded-xl py-1 ${
              date.toDateString() === todayDate ? "font-bold bg-indigo-100" : ""
            }`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
