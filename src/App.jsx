import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
// import sidebarConfig from "./routes/routes";

import AdminRouter from "./routes";
import Header from "./header";

const App = () => {
  return (
    // <div className="flex">
    //   <Sidebar />
    //   <main className="flex-1 ml-0 md:ml-64 p-6 bg-gray-100 min-h-screen">
    //     <AdminRouter />
    //   </main>
    // </div>
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-0 md:ml-64">
        <Header />
        <main className="mt-16 p-6 bg-gray-100 min-h-screen">
          <AdminRouter />
          {/* <Routes>{generateRoutes(sidebarConfig)}</Routes> */}
        </main>
      </div>
    </div>
  );
};

export default App;
