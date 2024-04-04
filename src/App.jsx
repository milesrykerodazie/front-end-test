import { useState } from "react";
import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [message, setMessage] = useState("");
  console.log("the refresh message => ", message);
  // axios.get(API_SERVER + '/todos', { withCredentials: true })
  // axios.defaults.withCredentials = true;
  const validResponse = async () => {
    const response = await axios.get(`${base_url}/auth/validate-token`, {
      withCredentials: true,
    });
    console.log("the response from valid => ", response);
    if (response?.data?.valid) {
      setMessage(response.data.message);
    } else {
      setMessage("validation of token did not work");
    }
  };

  useEffect(() => {
    validResponse();
  }, []);

  return (
    <div className="h-screen">
      <p>This is he home page</p>
      <p>{message && message}</p>
    </div>
  );
}

export default App;
