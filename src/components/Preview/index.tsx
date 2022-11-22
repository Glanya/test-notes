import React, { useCallback, useEffect, useState } from 'react';
import { INote } from '../../Interfaces/Interfaces';
import { getSubstring } from '../../utils/getSubstring';
import { Tags } from './Tags';

interface IPreviewProps {
  note: INote;
  onChangeNote: (editNote: INote) => void;
}

export const Preview = ({ note, onChangeNote }: IPreviewProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(note.content);
  const [tags, setTags] = useState(note.tags);

  useEffect(() => {
    setContent(note.content);
    setTags(note.tags);
  }, [note]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    const tags = getSubstring(content, '#');
    onChangeNote({
      id: note.id,
      content,
      tags,
    });
    setTags(tags);
    setIsEdit(false);
  };

  const handleValueChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }, []);

  return (
    <form className="preview">
      {isEdit ? (
        <button type="button" className="save-note" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button type="button" className="edit-note" onClick={handleEdit}>
          Edit
        </button>
      )}

      <textarea disabled={!isEdit} value={content} onChange={handleValueChange}></textarea>
      <Tags tags={tags} />
    </form>
  );
};
