import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between w-full px-6 py-4 bg-[#EAF2FB] items-center">
      <img src={logo} className="p-0 w-[130px]" alt="logo" />
      <div className="flex gap-3">
        <button className="text-black font-bold h-fit bg-inherit">
          Sign Up
        </button>
        <button className="text-[#6DE3FB] h-fit bg-none">Login</button>
      </div>
    </div>
  );
};

export default Header;
