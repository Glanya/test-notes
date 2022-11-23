import React, { useCallback, useEffect, useState } from 'react';
import { INote } from '../../Interfaces/Interfaces';
import { getSubstring } from '../../utils/getSubstring';
import { Tags } from './Tags';

interface IPreviewProps {
  currentNote: INote;
  onChangeNote: (editNote: INote) => void;
}

export const Preview = ({ currentNote, onChangeNote }: IPreviewProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(currentNote.content);
  const [tags, setTags] = useState(currentNote.tags);

  useEffect(() => {
    setContent(currentNote.content);
    setTags(currentNote.tags);
  }, [currentNote]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    const tags = getSubstring(content, '#').split(' ');
    onChangeNote({
      id: currentNote.id,
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
        <button type="button" className="change-note_btn" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button type="button" className="change-note_btn" onClick={handleEdit}>
          Edit
        </button>
      )}

      <textarea disabled={!isEdit} value={content} onChange={handleValueChange}></textarea>
      {tags && <Tags tags={tags} />}
    </form>
  );
};
