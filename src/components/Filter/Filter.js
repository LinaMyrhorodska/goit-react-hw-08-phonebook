import { FilterLabel, FilterTitle, FilterInput } from './Filter.styled';
import { useDispatch, useSelector} from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';


export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <>
      <FilterLabel>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput onChange={handleInputChange} value={filter} type="text" name="filter" autoComplete="off"/>
      </FilterLabel>
    </>
  );
};


