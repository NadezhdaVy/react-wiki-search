import useSWR from 'swr';
import { getWikiSearchResults } from '../../api/wikiApi';
import { Item } from '../Item';

const ListResults = ({ searchValue }: { searchValue: string }) => {
  const { isLoading, error, data } = useSWR(searchValue ? searchValue : null, getWikiSearchResults);

  let content;

  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (data?.query.pages) {
    const results = data.query.pages;

    content = (
      <ul>
        {Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })}
      </ul>
    );
  }
  return content;
};

export default ListResults;
