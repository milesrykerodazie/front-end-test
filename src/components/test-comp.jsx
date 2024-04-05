import React from "react";
import { useAuthContext } from "../context/auth-context";

const TestComp = () => {
  const { userDetails, error, message } = useAuthContext();
  console.log("user details from test comp => ", userDetails);
  return (
    <div>
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
};

export default TestComp;
