import axios from "axios";
import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from "./types";

export const getCurrentUserProfile = () => async (send) => {
  send({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/profile/me");
    send({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    send({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProfileById = (userId) => async (send) => {
  try {
    await axios.get(`/profile/user/${userId}`);

    send({
      type: GET_PROFILE,
    });
  } catch (err) {
    send({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllProfiles = () => async (send) => {
  send({
    type: UPDATE_PROFILE,
  });
  try {
    const res = await axios.get("/profile");
    send({
      type: GET_ALL_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    send({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile = (formData, history, edit = false) => async (
  send
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/profile", formData, config);

    send({
      type: GET_PROFILE,
      payload: res.data,
    });

    send(alert(edit ? "Profile Updated" : "Profile Created"));

    if (!edit) {
      history.push("/profile");
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => console.log("Error"));
    }

    send({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteAccount = () => async (send) => {
  if (window.confirm("Are you sure? This cannot be undone.")) {
    try {
      await axios.delete(`/profile`);

      send({ type: CLEAR_PROFILE });
      send({ type: ACCOUNT_DELETED });
      send(alert("Your account has been permanently deleted."));
    } catch (err) {
      send({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
