import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const EntryItem = ({ entry: { name, text, date } }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="entry-item">
      <h1>
        <i className="fas fa-user"></i> {name}
      </h1>
      <h2 className="entry-text">{text}</h2>
      <small>
        <Moment format="MM/DD/YYYY @ HH:mm">{date}</Moment>
      </small>
    </div>
  );
};

export default EntryItem;
