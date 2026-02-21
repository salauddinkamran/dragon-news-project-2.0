import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, loading, logOutUser } = use(AuthContext);
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
  const handleLogoutUser = () => {
    logOutUser()
      .then(() => {
        console.log("Logout successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>{user && user?.email}</div>
      <div className="nav">
        <ul className="flex gap-5 font-semibold">{links}</ul>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImg} alt="" />
        {user ? (
          <Link onClick={handleLogoutUser} className="btn btn-primary">
            Logout
          </Link>
        ) : (
          <Link className="btn btn-primary" to="/auth/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
