import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEntries } from "../actions/entry";

const Entries = () => {
  useSelector((state) => state.entry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [getEntries]);

  return (
    <div className="entries">
      <h4>This is the Entries Page</h4>
      <p>
        This is the entries pages and now I will increase the size of this font
        so that I can actually click on the god damn profile link.
      </p>
    </div>
  );
};

export default Entries;
