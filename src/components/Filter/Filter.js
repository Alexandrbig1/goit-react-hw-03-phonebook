import PropTypes from 'prop-types';
import { FilterDiv, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => (
  <FilterDiv>
    <FilterLabel htmlFor="filter">Find contacts by name:</FilterLabel>
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      required
      onChange={onChangeFilter}
    />
  </FilterDiv>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
