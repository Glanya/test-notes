import React, { useContext } from 'react';
import { RemoveTagContext } from '../../../Context/Context';

interface ITagProps {
  tag: string;
}

export const TagItem = ({ tag }: ITagProps) => {
  const { removeTag } = useContext(RemoveTagContext);
  return (
    <li className="tag">
      {tag}
      <button
        onClick={() => {
          removeTag(tag);
        }}
      >
        &times;
      </button>
    </li>
  );
};
