import React, { useState } from 'react';
import { NewNote } from '../NewNote';
import { NoteList } from '../NoteList';
import { INote } from '../../Interfaces/Interfaces';
import { NoteEdit } from '../NoteEdit';
import { NoteEditContext } from '../../Context/Context';

function App() {
  const [notes, setNotes] = useState<INote[] | []>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNoteEdit = () => setIsOpen((prev) => !prev);

  const addNote = (text: string) => {
    const newNote: INote = {
      id: new Date().getTime().toString(),
      text,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  console.log(notes)

  return (
    <NoteEditContext.Provider value={isOpen}>
      <div className="wrapper">
        <NewNote handleClick={toggleNoteEdit} />
        <NoteEdit isOpen={toggleNoteEdit} onCreate={addNote} />
        {notes.length ? <NoteList notes={notes}/> : <p>No notes</p>}
      </div>
    </NoteEditContext.Provider>
  );
}

export default App;
