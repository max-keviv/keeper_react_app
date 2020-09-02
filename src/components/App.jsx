import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name + value);
    return setInput((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function deleteNote(id) {
    console.log("delete " + id);
    setNotes((preValue) => {
      return preValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function handleClick() {
    event.preventDefault();
    setNotes((preValue) => {
      return [...preValue, input];
    });
    setInput(() => {
      return { title: "", content: "" };
    });
  }
  // const [input, setInput] = useState("");
  console.log(input);
  return (
    <div>
      <Header />
      <CreateArea
        input={input}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      {console.log(notes)}
      {notes.map((Element, index) => (
        <Note
          key={index}
          id={index}
          deleteNote={deleteNote}
          title={Element.title}
          content={Element.content}
        />
      ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
