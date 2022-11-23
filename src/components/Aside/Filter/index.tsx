import React, { Dispatch, SetStateAction } from 'react';

interface IFilterProps {
  setFilterValue: Dispatch<SetStateAction<string>>;
}

export const Filter = ({ setFilterValue }: IFilterProps) => {
  return <input className="filter" placeholder="Search by tag" onChange={(event) => setFilterValue(event.target.value)} />;
};
