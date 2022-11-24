import React, { useEffect, useState } from 'react';
import { NoteContext, NotesContext } from '../../Context/Context';
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

  const removeNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currentNote?.id === id) {
      setCurrentNote(null);
    }
  };

  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      <NoteContext.Provider value={{ removeNote, handleOpenNote }}>
        <div className="wrapper">
          <Aside currentNote={currentNote} />
          {currentNote && <Preview currentNote={currentNote} onChangeNote={handleChangeNote} />}
        </div>
      </NoteContext.Provider>
    </NotesContext.Provider>
  );
}

export default App;
