import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";

import { addUpvote, removeUpvote, deleteEntry } from "../../actions/entry";

const EntryItem = ({
  entry: { _id, name, user, text, date, upvotes, comments },
}) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <div className="entry-item">
      <h1>
        <Link to={`/profile/${user}`}>
          <i className="fas fa-user"></i> {name}
        </Link>
      </h1>
      <h2 className="entry-text">{text}</h2>
      <ul>
        <small>
          <Moment format="MM/DD/YYYY @ HH:mm">{date}</Moment>
        </small>
        <div className="inter-icons">
          <li>
            <i
              onClick={(e) => dispatch(addUpvote(_id))}
              className="far fa-hand-point-up"
            >
              <span>
                {upvotes.length > 0 && <span> {upvotes.length}</span>}
              </span>
            </i>
          </li>
          <Link to={`entries/comment/${_id}`}>
            <li>
              <i className="far fa-comment"> {comments.length}</i>
            </li>
          </Link>
          <li>
            <i
              onClick={(e) => dispatch(removeUpvote(_id))}
              className="far fa-hand-point-down"
            ></i>
          </li>
          {!auth.isloading && user === auth.user._id && (
            <li>
              <i
                onClick={(e) => dispatch(deleteEntry(_id))}
                className="fas fa-trash"
              ></i>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default EntryItem;
