import React, { useContext } from 'react';
import { OpenNoteContext, RemoveNoteContext } from '../../../Context/Context';
import { INote } from '../../../Interfaces/Interfaces';

import './style.scss';

interface INoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: INoteItemProps) => {
  const { removeNote } = useContext(RemoveNoteContext);
  const { handleOpenNote } = useContext(OpenNoteContext);

  const handleChooseNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeNote(note.id);
  };
  return (
    <div className="note" onClick={() => handleOpenNote(note)}>
      <p>{note.content.length > 10 ? `${note.content.substring(0, 8)}...` : note.content}</p>
      <button onClick={handleChooseNote}>&times;</button>
    </div>
  );
};
