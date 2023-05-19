import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const FilterContacts = () => {
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </FilterLabel>
  );
};

export default FilterContacts;
