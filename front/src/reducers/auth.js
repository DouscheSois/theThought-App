import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  isloading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isloading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        isloading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        isloading: false,
      };

    default:
      return state;
  }
}
