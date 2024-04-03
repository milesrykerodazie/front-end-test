import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  //states for then register form
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log({ fullname, username, email, password });

  const base_url = import.meta.env.VITE_API_BASE_URL;

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${base_url}/auth/register`, {
        name: fullname,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("the login sussess response => ", res);
        navigate("/login");
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className=" bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Register Form</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Full name</label>
            <input
              type="text"
              placeholder="Full name"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <button
            disabled={isLoading}
            className="bg-gray-300 px-5 py-2 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
