import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEntries } from "../actions/entry";
import EntryItem from "./EntryItem";

const Entries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entries);

  return (
    <Fragment>
      <h4>This is the Entries Page</h4>
      <div className="entries">
        {entries.map((entry) => (
          <EntryItem key={entry._id} entry={entry} />
        ))}
      </div>
    </Fragment>
  );
};

export default Entries;
