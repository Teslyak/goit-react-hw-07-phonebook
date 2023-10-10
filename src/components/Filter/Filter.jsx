import React from 'react';
import { InputFilter, LableFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter } from 'components/Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(getFilter(evt.target.value));
  };

  return (
    <>
      <LableFilter>
        Find contact by name
        <InputFilter
          type="text"
          onChange={handleFilter}
          placeholder="Search by name"
        ></InputFilter>
      </LableFilter>
    </>
  );
};
