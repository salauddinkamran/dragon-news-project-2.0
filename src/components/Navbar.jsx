import React from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav">
        <ul className="flex gap-5 font-semibold">{links}</ul>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImg} alt="" />
        <Link className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
