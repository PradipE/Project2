import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="container p-5 flex justify-between mx-auto fixed top-0 left-0 shadow-md  bg-white">
      <div className="">
        <NavLink to="bodypage" className="text-xl font-bold text-gray-600">
          SHARE
          <br />
          EXPERIENCE
        </NavLink>
      </div>
      <div className="flex justify-between gap-40 pt-4">
        <div>
          <NavLink
            to="read"
            className="text-md text-gray-600 font-medium hover:text-gray-800"
          >
            READ EXPERIENCE
          </NavLink>
        </div>
        <div>
          <NavLink
            to="add"
            className="text-md text-gray-600 font-medium hover:text-gray-800"
          >
            <button>ADD EXPERIENCE</button>
          </NavLink>
        </div>
      </div>
      <div className="bg-gray-500 rounded-md h-8 w-24 mt-3 hover:bg-gray-600">
        <button className="">
          <h4 className="text-white text-lg font-medium pl-6">Login</h4>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
