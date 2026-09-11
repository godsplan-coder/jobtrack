import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/applications", label: "Applications" },
  { to: "/add-application", label: "Add Application" },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-gray-900">
          JobTrack
        </NavLink>

        <nav className="flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
