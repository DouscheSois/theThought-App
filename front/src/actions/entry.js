import axios from "axios";
import { GET_ENTRIES, ENTRIES_ERROR } from "./types";

export const getEntries = () => async (send) => {
  try {
    const res = await axios.get("/entry");

    send({
      type: GET_ENTRIES,
      payload: res.data,
    });
  } catch (err) {
    send({
      type: ENTRIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
