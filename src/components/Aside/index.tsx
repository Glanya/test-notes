import React, { Dispatch, SetStateAction, useState } from 'react';
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
  const [filterValue, setFilterValue] = useState('');

  const filteredNotes = notes.filter((note) => note.tags.join(' ').toLowerCase().split(' ').includes(filterValue.toLowerCase()));

  const addNote = (content: string) => {
    const tags = !getSubstring(content, '#').length ? [] : getSubstring(content, '#').split(' ');
    const newNote: INote = {
      id: uuidv4(),
      content,
      tags,
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
        <Filter setFilterValue={setFilterValue} />
        <CreateNote onCreate={addNote} />
        {notes.length ? <NotesList notes={filterValue ? filteredNotes : notes} currentNote={currentNote} /> : <p>No notes</p>}
      </aside>
    </RemoveNoteContext.Provider>
  );
};
