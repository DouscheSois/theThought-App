import React from "react";

const CreateEntryItem = () => {
  return (
    <div className="create-entry-item">
      <form className="new-entry-form">
        <div className="form-group">
          <textarea
            className="new-form-submit-textbox"
            type="text"
            placeholder="Share Thought Here"
            name="text"
            // value={text}
            // onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="new-form-submit-button" value="Share" />
      </form>
    </div>
  );
};

export default CreateEntryItem;
