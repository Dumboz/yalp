import QueryString from 'qs';
import db from 'db/filter.json';
import { Button } from './PriceFilterButton.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

export function PriceFilterButton({ isSelect, onClick, children }) {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const data = db.price;
  const query = QueryString.parse(search.replace(/^\?/, ''));

  const requestData = () => {
    const newQuery = {
      ...query,
      price: !isSelect
        ? encodeURI(query?.price + ',' ?? '') + encodeURI(data[children])
        : encodeURI(query?.price?.replace(`${data[children]},`, '') ?? ''),
    };
    !newQuery.price && delete newQuery.price;
    console.log(newQuery);
    setSearchParams(newQuery);
  };

  return (
    <Button
      isSelect={isSelect}
      onClick={(e) => {
        onClick(e);
        requestData();
      }}
      type="button"
      role="switch"
      aria-checked={isSelect}>
      {children}
    </Button>
  );
}
