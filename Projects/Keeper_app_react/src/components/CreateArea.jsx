import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" });
  console.log(text);
  function onchange_title(event) {
    const newtext = event.target.value;

    setText((prevText) => {
      return { ...prevText, title: newtext };
    });
  }
  function onchange_content(event) {
    const newtext = event.target.value;

    setText((prevText) => {
      return { ...prevText, content: newtext };
    });
  }

  return (
    <div>
      <form>
        <input
          value={text.title}
          onChange={onchange_title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={text.content}
          onChange={onchange_content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          value={text}
          onClick={(event) => {
            props.onclick(text);
            setText({ title: "", content: "" });
            // console.log(text);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
