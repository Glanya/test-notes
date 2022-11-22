import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CreateNote } from './CreateNote';
import { NotesList } from './NotesList';
import { INote } from '../../Interfaces/Interfaces';
import { RemoveNoteContext } from '../../Context/Context';
import { Filter } from './Filter';

interface IAsideProps {
  notes: INote[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setCurrentNote: Dispatch<SetStateAction<INote | null>>;
}

export const Aside = ({ notes, setNotes, setCurrentNote }: IAsideProps) => {
  const addNote = (content: string) => {
    const newNote: INote = {
      id: uuidv4(),
      content,
      tags: [],
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    setCurrentNote(null);
  };

  return (
    <RemoveNoteContext.Provider value={{ removeNote }}>
      <aside className="aside">
        <Filter />
        <CreateNote onCreate={addNote} />
        {notes.length ? <NotesList notes={notes} /> : <p>No notes</p>}
      </aside>
    </RemoveNoteContext.Provider>
  );
};