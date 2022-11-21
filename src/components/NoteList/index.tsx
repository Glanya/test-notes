import React from 'react';
import { INote } from '../../Interfaces/Interfaces';
import { NoteItem } from '../NoteItem';

interface INoteListProps {
  notes: INote[] | [];
}

export const NoteList = ({ notes }: INoteListProps) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
};
