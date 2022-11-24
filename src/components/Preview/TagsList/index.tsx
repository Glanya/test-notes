import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TagItem } from '../TagItem';

interface ITagsListProps {
  tags: string[];
}

export const TagsList = ({ tags }: ITagsListProps) => {
  return (
    <div className="tags">
      {tags ? (
        <ul className="tags-list">
          {tags.map((tag) => {
            return <TagItem key={uuidv4()} tag={tag} />;
          })}
        </ul>
      ) : (
        <p>No tags</p>
      )}
    </div>
  );
};
