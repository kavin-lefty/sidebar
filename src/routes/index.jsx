import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard";
import Users from "../Users";
import sidebarConfig from "./routes";


export default function AdminRouter() {
  const componentMap = {
    Dashboard,
    Users,
  };

  const generateRoutes = (items) => {
    return items.flatMap((item) => {
      if (item.children) {
        return generateRoutes(item.children);
      } else if (item.path && item.element) {
        return (
          <Route
            key={item.path}
            path={item.path}
            element={React.createElement(componentMap[item.element])}
          />
        );
      }
      return [];
    });
  };
  return (
    <>
      <Routes>{generateRoutes(sidebarConfig)}</Routes>
    </>
  );
}
