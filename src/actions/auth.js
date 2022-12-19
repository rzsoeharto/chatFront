import Cookies from "universal-cookie";
import axios, { AxiosError } from "axios";
import { load_user } from "./profile";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./types";
const cookies = new Cookies();

export const checkAuthenticated = async (token) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("access")}`,
    },
  };
  const res = await axios.get(
    `http://localhost:8000/api/authenticated`,
    config
  );
  if (res.status !== 200) {
  }
};

export const register = async (email, password, name) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrfToken"),
    },
  };

  const body = JSON.stringify({ email, password, name });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/register`,
      body,
      config
    );
    if (res.data.error) {
      dispatch({
        type: REGISTER_FAIL,
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
      });
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrfToken"),
    },
  };

  const body = JSON.stringify({
    withCredentials: true,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/accounts/logout/`,
      body,
      config
    );
    if (res.data.success) {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
    });
  }
};

export const refresh = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrfToken"),
    },
  };
  const body = JSON.stringify({
    refresh: cookies.get("refresh"),
  });
  axios.post(`http://localhost:8000/api/token/refresh/`, body, config);
};
