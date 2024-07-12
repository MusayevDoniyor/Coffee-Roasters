import React from "react";
import { NavLink } from "react-router-dom";
import logoBlack from "../assets/logoBlack.svg";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-between items-center">
        <li>
          <NavLink to={"/"}>
            <img src={logoBlack} alt="CoffeeRoasters black logo" />
          </NavLink>
        </li>

        <ul className="flex gap-10 text-xs font-bold text-[#83888F]">
          <li>
            <NavLink to={"/home"}>HOME</NavLink>
          </li>

          <li>
            <NavLink to={"/aboutUs"}>ABOUT US</NavLink>
          </li>

          <li>
            <NavLink to={"/plan"}>CREATE YOUR PLAN</NavLink>
          </li>
        </ul>
      </ul>
    </header>
  );
};

export default Header;
