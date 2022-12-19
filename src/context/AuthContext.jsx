import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import decodeJwtToken from "../hooks/useDecode";

const AuthContext = createContext();
const cookies = new Cookies();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = new useNavigate();
  const [authToken, setAuthToken] = useState(null);
  const [userEmail, setUserEmail] = useState();
  const [userID, setUserID] = useState();

  let loginUser = async (email, password) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrfToken"),
      },
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post(
      `http://localhost:8000/api/login/`,
      body,
      config
    );
    if (res.status === 200) {
      cookies.set("refresh", res.data.refresh);
      setAuthToken(res.data.access);
      setUserEmail(jwtDecode(res.data.access).email);
      setUserID(jwtDecode(res.data.access).user_id);
    } else {
      return res;
    }
    navigate("/");
  };

  const contextData = {
    userEmail: userEmail,
    userID: userID,
    authToken: authToken,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
