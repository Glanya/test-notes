import React from 'react';
import { INote } from '../../../Interfaces/Interfaces';
import { NoteItem } from '../NoteItem';

interface INotesListProps {
  notes: INote[] | [];
}

export const NotesList = ({ notes }: INotesListProps) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
};
