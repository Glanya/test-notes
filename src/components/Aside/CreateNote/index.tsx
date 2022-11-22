import React, { useState } from 'react';

interface ICreateNoteProps {
  onCreate: (content: string) => void;
}

export const CreateNote = ({ onCreate }: ICreateNoteProps) => {
  const [value, setValue] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="note-edit" onSubmit={submitHandler}>
      <textarea placeholder="Create note" value={value} onChange={handleValueChange} />
      <button type="submit">Create</button>
    </form>
  );
};
