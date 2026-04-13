import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Clock, ChartSpline, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-green-800 px-4 py-2 rounded-md font-bold"
      : "hover:text-green-700";

  return (
    <div className="w-full shadow bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <Link to="/">
          <h1 className="font-bold text-xl">KeenKeeper</h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={linkClass}>
            <div className="flex items-center gap-2">
              <Home size={18} /> Home
            </div>
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <div className="flex items-center gap-2">
              <Clock size={18} /> Timeline
            </div>
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <div className="flex items-center gap-2">
              <ChartSpline size={18} /> Stats
            </div>
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t">

          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            <div className="flex items-center gap-2">
              <Home size={18} /> Home
            </div>
          </NavLink>

          <NavLink to="/timeline" onClick={() => setOpen(false)} className={linkClass}>
            <div className="flex items-center gap-2">
              <Clock size={18} /> Timeline
            </div>
          </NavLink>

          <NavLink to="/stats" onClick={() => setOpen(false)} className={linkClass}>
            <div className="flex items-center gap-2">
              <ChartSpline size={18} /> Stats
            </div>
          </NavLink>

        </div>
      )}
    </div>
  );
}