import { GET_ENTRIES, ENTRIES_ERROR } from "../actions/types";

const initialState = {
  entries: [],
  entry: null,
  isloading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: payload,
        isloading: false,
      };
    case ENTRIES_ERROR:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    default:
      return state;
  }
}
