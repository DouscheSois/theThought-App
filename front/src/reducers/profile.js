import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  isloading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        isloading: false,
      };
    case GET_ALL_PROFILES:
      return {
        ...state,
        profiles: payload,
        isloading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        isloading: false,
      };
    default:
      return state;
  }
}
