import QueryString from 'qs';
import db from 'db/filter.json';
import { Button } from './PriceFilterButton.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { memo } from 'react';

function PriceFilterButton({ isSelect, onClick, children }) {
  const { search } = useLocation();
  const [, setSearchParams] = useSearchParams();
  const data = db.price;
  const query = QueryString.parse(search.replace(/^\?/, ''));

  const requestData = () => {
    const newQuery = {
      ...query,
      price: !isSelect
        ? encodeURI(query?.price ? query.price + ',' : '') +
          encodeURI(data[children])
        : encodeURI(query?.price?.replace(`${data[children]}`, '') ?? ''),
    };

    newQuery.price = newQuery?.price.replace(/(,\s*$)/, '') ?? '';
    newQuery.price = newQuery?.price.replace(/(^,*)/, '') ?? '';
    newQuery.price = newQuery?.price.replace(/,{2}/, ',') ?? '';
    !newQuery.price && delete newQuery.price;

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
      aria-checked={isSelect}
    >
      {children}
    </Button>
  );
}

export default memo(PriceFilterButton);
