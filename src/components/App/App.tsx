import { SearchInput } from '../SerchInput';
import { useState, Suspense } from 'react';
import { ListResults } from '../ListResults';
import useDebounce from '../../hooks/useDebounce';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const debounced = useDebounce(searchValue, 1000);

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ListResults searchValue={debounced} />
      </Suspense>
    </>
  );
}

export default App;
