import axios from "axios";
import {
  GET_ENTRIES,
  ENTRIES_ERROR,
  UPDATE_LIKES,
  DELETE_ENTRY,
  ADD_ENTRY,
} from "./types";

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

export const addUpvote = (id) => async (send) => {
  try {
    const res = await axios.put(`entry/upvote/${id}`);

    send({
      type: UPDATE_LIKES,
      payload: { id, upvotes: res.data },
    });
  } catch (err) {
    send({
      type: ENTRIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const removeUpvote = (id) => async (send) => {
  try {
    const res = await axios.put(`entry/downvote/${id}`);

    send({
      type: UPDATE_LIKES,
      payload: { id, upvotes: res.data },
    });
  } catch (err) {
    send({
      type: ENTRIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteEntry = (id) => async (send) => {
  try {
    await axios.delete(`entry/${id}`);

    send({
      type: DELETE_ENTRY,
      payload: id,
    });
    alert("Post Removed");
  } catch (err) {
    send({
      type: ENTRIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addEntry = (formData) => async (send) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("entry/", formData, config);

    send({
      type: ADD_ENTRY,
      payload: res.data,
    });
    alert("Post Created");
  } catch (err) {
    send({
      type: ENTRIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
