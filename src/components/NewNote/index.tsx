import React from 'react';

interface INewNoteProps {
  handleClick: () => void;
}

export const NewNote = ({ handleClick }: INewNoteProps) => {
  return (
    <button className="new-note" onClick={handleClick}>
      Add note
    </button>
  );
};
