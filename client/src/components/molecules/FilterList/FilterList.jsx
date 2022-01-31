import QueryString from 'qs';
import db from 'db/filter.json';
import { memo, useCallback, useRef } from 'react';
import { oneOf } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Wrapper, Heading, List } from './FilterList.styled';
import { setFeatures, setDistance } from 'store/filterSlice';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Selection, PriceFilterButtonGroup } from 'components';

function FilterList({ categories, type = 'checkbox', heading, options = [] }) {
  const listRef = useRef(null);
  const { search } = useLocation();
  const [_, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e) => {
      const isChecked = e.target.querySelector('input').checked;
      const query = QueryString.parse(search.replace(/^\?/, ''));
      const option = e.target.querySelector('span').textContent;
      const data = db[categories];

      switch (categories) {
        case 'features':
          // query 요청
          const newQuery = {
            ...query,
            offset: 0,
            attributes: isChecked
              ? encodeURI(query?.attributes ? query?.attributes + ',' : '') +
                encodeURI(data[option])
              : encodeURI(query?.attributes?.replace(`${data[option]}`, '')),
          };

          newQuery.attributes =
            newQuery?.attributes.replace(/(,\s*$)/, '') ?? '';
          newQuery.attributes = newQuery?.attributes.replace(/(^,*)/, '') ?? '';
          newQuery.attributes = newQuery?.attributes.replace(/,{2}/, ',') ?? '';
          !newQuery.attributes && delete newQuery.attributes;

          setSearchParams(newQuery);

          // store state 요청
          dispatch(setFeatures(data[option]));

          break;
        case 'distance':
          // query 요청
          setSearchParams({
            ...query,
            offset: 0,
            radius: encodeURI(Number(data[option])),
          });

          // store state 요청
          dispatch(setDistance(data[option]));
          break;
        default:
          break;
      }
    },
    [search, setSearchParams]
  );

  const makePascalCase = (str) => {
    return str
      .split(' ')
      .map((char) => (char = char[0].toUpperCase() + char.slice(1)))
      .join(' ');
  };

  const setOptions = (options) => {
    return type !== 'price' ? (
      options.map((item, key) => (
        <li key={key} tabIndex={'0'}>
          <Selection
            keyProp={key}
            type={type}
            onClick={handleClick}
            group={heading}
            children={item[0]}
            fontSize={14}
          />
        </li>
      ))
    ) : (
      <li>
        <PriceFilterButtonGroup />
      </li>
    );
  };

  return (
    <Wrapper>
      <Heading>{makePascalCase(heading)}</Heading>
      <List ref={listRef}>{setOptions(options)}</List>
    </Wrapper>
  );
}

FilterList.defalutProps = {
  type: 'checkbox',
  options: [],
};

FilterList.propTypes = {
  categories: oneOf(['price', 'features', 'distance']).isRequired,
  type: oneOf(['checkbox', 'radio', 'price']).isRequired,
};

export default memo(FilterList);
