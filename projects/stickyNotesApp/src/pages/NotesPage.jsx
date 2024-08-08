import React from "react";
import NoteCard from "../components/NoteCard";
import { data as notes } from "../assets/data";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;
