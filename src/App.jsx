import { useState } from "react";
import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./context/auth-context";

function App() {
  const { userDetails, error, message } = useAuthContext();
  console.log("user details from context => ", userDetails);
  const base_url = import.meta.env.VITE_API_BASE_URL;
  // const [message, setMessage] = useState("");
  // const [userDetails, setUserDetails] = useState();
  // const [error, setError] = useState();
  console.log("the refresh message => ", message);
  console.log("the userDetails => ", userDetails);
  // axios.get(API_SERVER + '/todos', { withCredentials: true })
  // axios.defaults.withCredentials = true;
  // const validResponse = async () => {
  //   try {
  //     const response = await axios.get(`${base_url}/auth/validate-token`, {
  //       withCredentials: true,
  //     });
  //     console.log("the response from valid => ", response);
  //     if (response?.data?.valid) {
  //       setMessage(response.data.message);
  //       setUserDetails(response.data.details);
  //     }
  //     if (!response.data) {
  //       setMessage("validation of token did not work");
  //     }
  //   } catch (error) {
  //     console.log("the validation error => ", error);
  //     if (error instanceof axios.AxiosError) {
  //       console.log("the error => ", error?.response?.data);
  //       setError(error.response.data.valid);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   validResponse();
  // }, []);

  return (
    <div className="h-screen">
      <p>This is he home page</p>
      {userDetails === undefined && error !== false && (
        <div>
          <p className="text-blue-500 animate-pulse font-medium text-center my-20">
            Loading...
          </p>
        </div>
      )}
      {userDetails !== undefined && (
        <div>
          <p className="uppercase text-green-500 font-semibold">
            {message && message}
          </p>

          <div>
            <p className="capitalize text-gray-600">
              Name: {userDetails?.name}
            </p>
            <p className="text-gray-400">Email: {userDetails?.email}</p>
            <p className="uppercase text-xs font-medium text-green-500">
              Admin: {userDetails?.isAdmin ? "Admin" : "User"}
            </p>
          </div>
        </div>
      )}
      {error === false && <div>Please login to see</div>}
    </div>
  );
}

export default App;
