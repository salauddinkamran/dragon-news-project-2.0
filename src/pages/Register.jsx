import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-5 py-10">
        <h2 className="text-center text-3xl font-semibold">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset space-y-3">
            {/* Name */}
            <div>
              <label className="label text-lg text-black font-medium mb-2">
                Your Name
              </label>
              <input
                type="type"
                name="name"
                className="input bg-base-200"
                placeholder="Your name"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label className="label text-lg text-black font-medium mb-2">
                Enter you photo URL
              </label>
              <input
                type="type"
                name="photo"
                className="input bg-base-200"
                placeholder="Enter you photo URL"
              />
            </div>
            {/* Email */}
            <div>
              <label className="label text-lg text-black font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="input bg-base-200"
                placeholder="Email"
              />
            </div>
            {/* password */}
            <div>
              <label className="label text-lg text-black font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input bg-base-200 outline-0"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="btn btn-xs absolute top-2 right-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="font-semibold pt-3">
            Allready Have An Account ?{" "}
            <Link className="font-bold text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
