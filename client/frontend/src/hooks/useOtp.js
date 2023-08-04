import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useOtp = () => {
  localStorage.setItem("accessToken", accessToken)
  const [getUserToken, setUserToken] = useState()
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const otp = async (otp) => {
    setIsLoading(true);
    setError(null);
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${setUserToken} https://fastx-logistic-api.onrender.com/v1/auth/send-verification-email`,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ otp }),
      });

      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        console.log("OTP verification failed");
      }

      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // update loading state
        setIsLoading(false);
        console.log("OTP verified successfully!");
      }
    } catch (error) {
      console.log("Error occurred during OTP verification:", error);
    }
  };
  return { otp, isLoading, error };
};
