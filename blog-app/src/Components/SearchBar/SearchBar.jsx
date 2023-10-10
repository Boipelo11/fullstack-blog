import PropTypes from 'prop-types';
import './SearchBar.css'


const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search by Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>Clear</span>}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearchKey: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
