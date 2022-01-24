import QueryString from 'qs';
import db from 'db/filter.json';
import { useRef } from 'react';
import { oneOf } from 'prop-types';
import { Wrapper, Heading, List } from './FilterList.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Selection, PriceFilterButtonGroup } from 'components';
import { useDispatch, useSelector } from 'react-redux';

export const FilterList = ({
  categories,
  type = 'checkbox',
  heading,
  options = [],
}) => {
  const listRef = useRef(null);
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const type = e.target.querySelector('input').type;
    const isChecked = e.target.querySelector('input').checked;

    if (type === 'radio') {
      [...listRef.current.children].forEach((item) => {
        const input = item.querySelector('input');
        const label = item.querySelector('label');
        label.classList.toggle('active', input.checked);
      });
    }

    const term = e.target.querySelector('span').textContent;
    const data = db[categories];
    const query = QueryString.parse(search.replace(/^\?/, ''));

    switch (categories) {
      case 'features':
        const newQuery = {
          ...query,
          offset: 0,
          attributes: isChecked
            ? encodeURI(query?.attributes ? query?.attributes + ',' : '') +
              encodeURI(data[term])
            : encodeURI(query?.attributes?.replace(`${data[term]}`, '')),
        };

        newQuery.attributes = newQuery?.attributes.replace(/(,\s*$)/, '') ?? '';
        newQuery.attributes = newQuery?.attributes.replace(/(^,*)/, '') ?? '';
        newQuery.attributes = newQuery?.attributes.replace(/,{2}/, ',') ?? '';
        !newQuery.attributes && delete newQuery.attributes;

        setSearchParams(newQuery);
        break;
      case 'distance':
        setSearchParams({
          ...query,
          offset: 0,
          radius: encodeURI(Number(data[term])),
        });
        break;
      default:
        break;
    }
  };

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
            type={type}
            onClick={handleClick}
            group={heading}
            children={item[0]}
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
};

FilterList.propTypes = {
  categories: oneOf(['price', 'features', 'distance']).isRequired,
  type: oneOf(['checkbox', 'radio', 'price']).isRequired,
};
