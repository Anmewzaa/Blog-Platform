import React from "react";
import { Link } from "react-router-dom";

const navItem = [
  {
    Name: "Home",
    URL: "/",
  },
  {
    Name: "Login",
    URL: "/",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-[2rem] h-[80px]">
        <h2 className="lg:text-3xl text-2xl tracking-wide">
          <Link to="/">Blog Platform</Link>
        </h2>
        <ul className="lg:flex hidden">
          {navItem &&
            navItem.map((item) => {
              return (
                <li className="mr-[2rem] uppercase">
                  <Link to={item.URL}>{item.Name}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
