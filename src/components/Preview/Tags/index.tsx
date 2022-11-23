import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ITagsProps {
  tags: string[];
}

export const Tags = ({ tags }: ITagsProps) => {
  return (
    <div className="tags">
      <ul className="tags-list">
        {tags.map((tag) => {
          return (
            <li key={uuidv4()} className="tag">
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
