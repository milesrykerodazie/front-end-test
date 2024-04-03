import React from "react";

const LoginForm = () => {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className=" bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Login Form</h1>
        <form className="space-y-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <button className="bg-gray-300 px-5 py-2 rounded-md font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
