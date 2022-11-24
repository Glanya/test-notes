import React, { useContext } from 'react';
import { NoteContext } from '../../../Context/Context';
import { INote } from '../../../Interfaces/Interfaces';


interface INoteItemProps {
  note: INote;
  className: string;
}

export const NoteItem = ({ note, className }: INoteItemProps) => {
  const { removeNote, handleOpenNote } = useContext(NoteContext);

  const handleRemoveNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeNote(note.id);
  };

  return (
    <div className={className} onClick={() => handleOpenNote(note)}>
      <p>{note.content.length > 10 ? `${note.content.substring(0, 8)}...` : note.content}</p>
      <button onClick={handleRemoveNote}>&times;</button>
    </div>
  );
};
