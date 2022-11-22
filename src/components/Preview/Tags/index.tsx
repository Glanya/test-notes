import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ITagsProps {
  tags: string[] | undefined;
}

export const Tags = ({ tags }: ITagsProps) => {
  return (
    <div className="tags">
      <ul className="tags-list">
        {tags?.map((tag: string) => {
          return (
            <li className="tag" key={uuidv4()}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
