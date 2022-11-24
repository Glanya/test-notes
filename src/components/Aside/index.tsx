import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CreateNote } from './CreateNote';
import { NotesList } from './NotesList';
import { INote } from '../../Interfaces/Interfaces';
import { Filter } from './Filter';
import { getSubstring } from '../../utils/getSubstring';
import { NotesContext } from '../../Context/Context';

interface IAsideProps {
  currentNote: INote | null;
}

export const Aside = ({ currentNote }: IAsideProps) => {
  const [notes, setNotes] = useContext(NotesContext);

  const [filterValue, setFilterValue] = useState('');

  const filteredNotes = notes.filter((note: INote) => note.tags.join(' ').toLowerCase().split(' ').includes(filterValue.toLowerCase()));

  const addNote = (content: string) => {
    const tags = !getSubstring(content, '#').length ? [] : getSubstring(content, '#').split(' ');
    const newNote: INote = {
      id: uuidv4(),
      content,
      tags,
    };
    setNotes((prev: INote[]) => [...prev, newNote]);
  };

  return (
    <aside className="aside">
      <Filter setFilterValue={setFilterValue} />
      <CreateNote onCreate={addNote} />
      {notes.length ? <NotesList notes={filterValue ? filteredNotes : notes} currentNote={currentNote} /> : <p>No notes</p>}
    </aside>
  );
};
