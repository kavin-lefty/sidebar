import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import sidebarConfig from "./routes/routes";

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  // Auto-open menus based on current route
  useEffect(() => {
    const initialOpenMenus = {};
    sidebarConfig.forEach((item) => {
      if (item.children?.some((child) => location.pathname === child.path)) {
        initialOpenMenus[item.title] = true;
      }
    });
    setOpenMenus(initialOpenMenus);
  }, [location.pathname]);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 hidden md:block">
      <div className="p-6 text-xl font-bold border-b">Admin Panel</div>
      <nav className="p-4 space-y-2">
        {sidebarConfig
          .filter((item) => !item.hidden)
          .map((item) => {
            const Icon = item.icon;
            const hasChildren = Array.isArray(item.children);

            return (
              <div key={item.title}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded ${
                        openMenus[item.title]
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon />
                        {item.title}
                      </span>
                      <FaChevronDown
                        className={`transition-transform ${
                          openMenus[item.title] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMenus[item.title] && (
                      <div className="ml-8 space-y-1 mt-1">
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <NavLink
                              key={child.title}
                              to={child.path}
                              className={navLinkClass}
                            >
                              <div className="flex items-center gap-2">
                                <ChildIcon />
                                {child.title}
                              </div>
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink to={item.path} className={navLinkClass}>
                    <div className="flex items-center gap-3">
                      <Icon />
                      {item.title}
                    </div>
                  </NavLink>
                )}
              </div>
            );
          })}
      </nav>
    </aside>
  );
};

export default Sidebar;
