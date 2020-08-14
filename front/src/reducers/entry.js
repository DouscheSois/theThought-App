import {
  GET_ENTRIES,
  ENTRIES_ERROR,
  UPDATE_LIKES,
  DELETE_ENTRY,
  ADD_ENTRY,
} from "../actions/types";

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
    case ADD_ENTRY:
      return {
        ...state,
        entries: [payload, ...state.entries],
        isloading: false,
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry._id !== payload),
        loading: false,
      };
    case ENTRIES_ERROR:
      return {
        ...state,
        error: payload,
        isloading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === payload.id
            ? { ...entry, upvotes: payload.upvotes }
            : entry
        ),
        isloading: false,
      };
    default:
      return state;
  }
}
