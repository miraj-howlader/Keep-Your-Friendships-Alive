import { NavLink } from "react-router-dom";
import {Home, Clock ,ChartSpline} from 'lucide-react'


export default function Navbar() {
  return (
    <div className=" container mx-auto flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">KeenKeeper</h1>

      <div className="flex gap-8 items-center justify-center">
        <NavLink  to="/" className={({ isActive }) => isActive ? "text-white bg-green-800 px-4 py-2 rounded-md font-bold" : " "}>
          <div className="flex items-center justify-center gap-2">
            <Home/> 
             Home
          </div>
        </NavLink>
        <NavLink  to="/timeline" className={({ isActive }) => isActive ? "text-white bg-green-800 px-4 py-2 rounded-md font-bold" : " "}>
          <div className="flex items-center justify-center gap-2">
            <Clock/> 
             Timeline
          </div>
        </NavLink>
        <NavLink  to="/stats" className={({ isActive }) => isActive ? "text-white bg-green-800 px-4 py-2 rounded-md font-bold" : " "}>
          <div className="flex items-center justify-center gap-2">
            <ChartSpline/> 
             Stats
          </div>
        </NavLink>
       
      </div>
    </div>
  );
}