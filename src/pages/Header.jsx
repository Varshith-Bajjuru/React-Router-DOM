import React from "react";
import { Link , NavLink} from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex justify-between px-5 py-5 bg-slate-600 align-middle">
        <div>
          <Link to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/03/AMD-Logo.png"
              alt="Logo"
              className="w-16"
            />
          </Link>
        </div>
        <div className="flex justify-between px-9 gap-5">
          <div>
            <NavLink to="/"
             className={({isActive}) =>
                `hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`
            }>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/about" 
            className={({isActive}) =>
                `hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`
            }>
              About
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className={({isActive}) =>
                `hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`
            }>
              contact
            </NavLink>
          </div>
          <div>
            <NavLink to="/github" className={({isActive}) =>
                `hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`
            }>
              Github
            </NavLink>
          </div>
        </div>
        <div>
          <button className="bg-orange-500 px-5 py-2 rounded-full">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
