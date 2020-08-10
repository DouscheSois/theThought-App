import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";

const EntryItem = ({ entry: { name, text, date } }) => {
  const auth = useSelector((state) => state.auth);
  // const entry = useSelector((state) => state.entry.entries);

  return (
    <div className="entry-item">
      <h1>{name}|</h1>
      <h2>{text}</h2>
      <small>
        <Moment format="MM/DD/YYYY @ HH:mm">{date}</Moment>
      </small>
    </div>
  );
};

EntryItem.propTypes = {
  entry: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default EntryItem;
