import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CreateNote } from './CreateNote';
import { NotesList } from './NotesList';
import { INote } from '../../Interfaces/Interfaces';
import { RemoveNoteContext } from '../../Context/Context';
import { Filter } from './Filter';
import { getSubstring } from '../../utils/getSubstring';

interface IAsideProps {
  notes: INote[];
  currentNote: INote | null;
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setCurrentNote: Dispatch<SetStateAction<INote | null>>;
}

export const Aside = ({ notes, setNotes, currentNote, setCurrentNote }: IAsideProps) => {
  const addNote = (content: string) => {
    const newNote: INote = {
      id: uuidv4(),
      content,
      tags: getSubstring(content, '#').split(' '),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currentNote?.id === id) {
      setCurrentNote(null);
    }
  };

  return (
    <RemoveNoteContext.Provider value={{ removeNote }}>
      <aside className="aside">
        <Filter />
        <CreateNote onCreate={addNote} />
        {notes.length ? <NotesList notes={notes} currentNote={currentNote} /> : <p>No notes</p>}
      </aside>
    </RemoveNoteContext.Provider>
  );
};
