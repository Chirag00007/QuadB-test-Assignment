import React, { useState } from "react";
import chairImg from "../../assets/images/chair.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [isView, setIsView] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        username,
        email,
        password,
      });
      toast.success("User registered successfully!");

      //after registering the user, clear the input fields
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("There was an error registering the user!");
    }
  };

  return (
    <div className="w-full min-h-screen flex box-condition">
      <div className="w-[50%] min-h-screen bg-greyish h-full hidden md:flex items-center justify-center">
        <img src={chairImg} alt="chair" />
      </div>
      <div className="flex justify-center flex-col w-[50%] ml-[0px] md:ml-[50px] px-4 md:min-h-screen">
        <h1 className="heading mb-4">Sign up</h1>
        <p className="paragraph mb-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-500">
            Sign In
          </Link>
        </p>

        <form
          className="w-full max-w-[500px] flex flex-col gap-[20px] mt-[10px]"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            placeholder="Your name"
            className="inputs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="inputs"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="w-full relative">
            <input
              type={isView ? "text" : "password"}
              className="w-full inputs"
              placeholder="Your Password!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setIsView(!isView)}
              className="text-md text-black absolute right-0 top-[9px] cursor-pointer"
            >
              {!isView ? (
                <ion-icon name="eye-outline"></ion-icon>
              ) : (
                <ion-icon name="eye-off-outline"></ion-icon>
              )}
            </span>
          </div>
          <div className="flex w-full items-center justify-between my-4">
            <div className="flex">
              <input type="checkbox" name="check" id="check" />
              <p className="text-sm ml-2 text-gray-500">
                I agree with the{" "}
                <span className="text-black font-semibold">Privacy Policy</span>{" "}
                and{" "}
                <span className="text-black font-semibold">Terms of use</span>
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md font-medium"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
