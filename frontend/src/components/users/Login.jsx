import React, { useState } from "react";
import axios from "axios";
import chairImg from "../../assets/images/chair.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isView, setIsView] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });
        const { token } = response.data;
        console.log(response.data);

      // Store token in local storage or context
      localStorage.setItem("token", token);

      // Redirect user to a different page or show a success message
      navigate("/"); // Example redirect
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full min-h-screen flex box-condition">
      <div className="w-[50%] min-h-screen bg-greyish h-full hidden md:flex items-center justify-center">
        <img src={chairImg} alt="chair" />
      </div>
      <div className="flex justify-center flex-col w-[50%] ml-[0px] md:ml-[50px] px-4 md:min-h-screen">
        <h1 className="heading mb-4">Sign In</h1>
        <p className="paragraph mb-4">
          Don't have an account Yet?{" "}
          <Link to={"/register"} className="text-green-500">
            Sign up
          </Link>
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <form
          className="w-full max-w-[500px] flex flex-col gap-[20px] mt-[10px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your username or Email!"
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-full relative">
            <input
              type={isView ? "text" : "password"}
              className="w-full inputs"
              placeholder="Your Password!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <p className="text-sm ml-1 text-gray-500">Remember Me</p>
            </div>

            <Link
              to={"/forgot-password"}
              className="text-sm text-black font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
