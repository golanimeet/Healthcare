import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hi, User</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
        />
      </div>
    </header>
  )
}
