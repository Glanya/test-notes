import React, { useCallback, useEffect, useState } from 'react';
import { RemoveTagContext } from '../../Context/Context';
import { INote } from '../../Interfaces/Interfaces';
import { getSubstring } from '../../utils/getSubstring';
import { TagsList } from './TagsList';

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
    const tags = !getSubstring(content, '#').length ? [] : getSubstring(content, '#').split(' ');
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

  const removeTag = (tag: string) => {
    const removedTags = tags.filter((string) => string !== tag);
    const newContent = content
      .split(' ')
      .filter((string) => string !== tag)
      .join(' ');
    onChangeNote({
      id: currentNote.id,
      content: newContent,
      tags: removedTags,
    });
    setTags(removedTags);
    setContent(newContent);
  };

  return (
    <RemoveTagContext.Provider value={{ removeTag }}>
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
        {tags && <TagsList tags={tags} />}
      </form>
    </RemoveTagContext.Provider>
  );
};
