import { NavLink } from "react-router-dom";
import { Briefcase, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/applications", label: "Applications" },
  { to: "/add-application", label: "Add Application" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-slate-50"
        >
          <Briefcase className="w-5 h-5 text-blue-600" />
          JobTrack
        </NavLink>

        <div className="flex items-center gap-1">
          <nav className="flex gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-slate-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="ml-2 p-2 rounded-md text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
