import React from 'react';
import { INote } from '../../Interfaces/Interfaces';

import './style.scss';

interface INoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: INoteItemProps) => {
  return (
    <div className="note">
      <p>{note.text}</p>
    </div>
  );
};
