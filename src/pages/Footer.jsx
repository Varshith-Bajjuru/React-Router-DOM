import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
<footer class="bg-slate-600 text-gray-300 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-between items-center">
      <div class="w-full sm:w-auto mb-6 sm:mb-0">
        <img
              src="https://logos-world.net/wp-content/uploads/2020/03/AMD-Logo.png"
                                class="mr-3 h-16"
                                alt="Logo"
                            />
        <p class="mt-2 text-sm">Making your online experience seamless and efficient.</p>
    </div>
      <div class="w-full sm:w-auto">
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
    </div>
  </div>
    <div class="mt-8 border-t border-gray-800 pt-4 text-center">
      <p class="text-xs">© 2024 varshith. All rights reserved.</p>
    </div>
  </div>
</footer>

    );
}

export default Footer;
