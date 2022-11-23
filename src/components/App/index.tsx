import React, { useEffect, useState } from 'react';
import { OpenNoteContext } from '../../Context/Context';
import { INote } from '../../Interfaces/Interfaces';
import { Aside } from '../Aside/index';
import { Preview } from '../Preview';

const data = localStorage.getItem('data');

function App() {
  const [notes, setNotes] = useState<INote[]>(JSON.parse(data!) || []);
  const [currentNote, setCurrentNote] = useState<INote | null>(null);


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(notes));
  }, [notes]);


  const handleOpenNote = (note: INote) => {
    setCurrentNote(note);
  };

  const handleChangeNote = (editNote: INote) => {
    const updatedNotes = notes.map((note: INote) => {
      if (note.id === editNote.id) {
        return editNote;
      } else return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <OpenNoteContext.Provider value={{ handleOpenNote }}>
      <div className="wrapper">
        <Aside notes={notes} setNotes={setNotes} currentNote={currentNote} setCurrentNote={setCurrentNote} />
        {currentNote && <Preview currentNote={currentNote} onChangeNote={handleChangeNote} />}
      </div>
    </OpenNoteContext.Provider>
  );
}

export default App;
