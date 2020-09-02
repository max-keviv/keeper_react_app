import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
        />
        <button onClick={props.handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
