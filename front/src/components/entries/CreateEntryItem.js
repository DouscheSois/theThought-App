import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addEntry } from "../../actions/entry";

const CreateEntryItem = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="create-entry-item">
      <form
        className="new-entry-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEntry({ text }));
          setText("");
        }}
      >
        <div className="form-group">
          <textarea
            className="new-form-submit-textbox"
            type="text"
            placeholder="Share Thought Here"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <input type="submit" className="new-form-submit-button" value="Share" />
      </form>
    </div>
  );
};

export default CreateEntryItem;
