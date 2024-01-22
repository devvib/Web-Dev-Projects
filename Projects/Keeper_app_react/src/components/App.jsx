import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function onclick(newNotes) {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  }
  function delete_note(id) {
    console.log(id);
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((item, index) => {
        if (index !== id) return item;
      });
      return newNotes;
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onclick={onclick} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={delete_note}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
