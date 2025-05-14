import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white shadow-md fixed top-0 left-0 right-0 z-10 ml-0 md:ml-64 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Header;
