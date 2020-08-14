import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEntries } from "../actions/entry";
import EntryItem from "./EntryItem";
import CreateEntryItem from "./CreateEntryItem";

const Entries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);
  const entries = useSelector((state) => state.entry.entries);

  return (
    <div className="entries">
      <CreateEntryItem />
      {entries.map((entry) => (
        <EntryItem key={entry._id} entry={entry} />
      ))}
    </div>
  );
};

export default Entries;
