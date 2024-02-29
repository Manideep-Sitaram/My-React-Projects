import React from "react";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <nav className="mx-auto px-5 py-4 bg-white flex flex-wrap justify-between mb-4 border-1 w-full items-center">
      <div className = "w-40 ml-12">
        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" />
      </div>
      <div className="flex justify-between gap-10 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-700" : "text-grey-700"
            } hover:text-orange-700`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-700" : "text-grey-700"
            } hover:text-orange-700`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-700" : "text-grey-700"
            } hover:text-orange-700`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-700" : "text-grey-700"
            } hover:text-orange-700`
          }
        >
          Github
        </NavLink>
      </div>
      <div className= "flex flex-wrap gap-5 mr-12">
        <button>Log in</button>
        <button className = "px-3 py-2 text-white font-semibold bg-orange-700 hover:bg-orange-900 rounded-lg">Get started</button>
      </div>
    </nav>
  );
}

export default Header;
