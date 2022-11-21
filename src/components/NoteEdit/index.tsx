import React, { useContext, useState } from 'react';
import { NoteEditContext } from '../../Context/Context';

interface INoteEditProps {
  isOpen: () => void;
  onCreate: (text: string) => void;
}

export const NoteEdit = ({ isOpen, onCreate }: INoteEditProps) => {
  const [value, setValue] = useState('');
  const isActive = useContext(NoteEditContext);

  if (!isActive) return null;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      isOpen();
      setValue('');
    }
  };

  return (
    <form className="note-edit" onClick={isOpen} onSubmit={submitHandler}>
      <input onClick={(event) => event.stopPropagation()} placeholder="Enter the text" value={value} onChange={(event) => setValue(event.target.value)} />
    </form>
  );
};
