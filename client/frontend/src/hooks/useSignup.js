import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();


  const signup = async (firstName, surName,  phoneNumber, address, city,  email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://fastx-logistic-api.onrender.com/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, surName, phoneNumber, address, city, email, password }),
    });

    const json = await response.json();
    // const tokens = response.data.tokens;

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // this is to save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //  this is to update the auth context
      dispatch({ type: "LOGIN", payload: json });

      //  this is to update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
