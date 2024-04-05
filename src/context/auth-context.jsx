import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const validResponse = async () => {
      try {
        const response = await axios.get(`${base_url}/auth/validate-token`, {
          withCredentials: true,
        });
        console.log("the response from valid => ", response);
        if (response?.data?.valid) {
          setMessage(response.data.message);
          setUserDetails(response.data.details);
        }
        if (!response.data) {
          setMessage("validation of token did not work");
        }
      } catch (error) {
        console.log("the validation error => ", error);
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
          setError(error.response.data.valid);
        }
      }
    };
    validResponse();
  }, []);

  return (
    <AuthContext.Provider
      value={{ userDetails, setUserDetails, loading, error, message }}
    >
      {children}
    </AuthContext.Provider>
  );
};
