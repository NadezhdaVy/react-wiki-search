import './SearchInput.css';

type SearchProps = {
  searchValue: string;
  setSearchValue: (val: string) => void;
};

const SearchInput = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <input
      className="search-input"
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
      autoFocus
    />
  );
};

export default SearchInput;
