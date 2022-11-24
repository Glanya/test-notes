import React from 'react';
import { INote } from '../../../Interfaces/Interfaces';
import { NoteItem } from '../NoteItem';

interface INotesListProps {
  notes: INote[] | [];
  currentNote: INote | null;
}

export const NotesList = ({ notes, currentNote }: INotesListProps) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} className={currentNote?.id === note.id ? 'note active' : 'note'} />;
      })}
    </div>
  );
};
