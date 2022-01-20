import axios from 'axios';
import { useRef } from 'react';
import { makeQuery } from 'utils';
import { Selection, PriceFilterButtonGroup } from 'components';
import { string, arrayOf, oneOf, array } from 'prop-types';
import { Wrapper, Heading, List, Button } from './FilterList.styled';

export const FilterList = ({ type = 'checkbox', heading, options = [] }) => {
  const listRef = useRef(null);

  const handleClick = async (e) => {
    const type = e.target.querySelector('input').type;
    const isChecked = e.target.querySelector('input').checked;

    if (type === 'radio') {
      [...listRef.current.children].forEach((item) => {
        const input = item.querySelector('input');
        const label = item.querySelector('label');
        label.classList.toggle('active', input.checked);
      });
    }

    if (isChecked) {
      // 비동기 통신
      // try {
      //   const query = makeQuery({
      //     latitude: 37.786942,
      //     longitude: -122.399643,
      //   });
      //   const { data } = await axios.get(
      //     `/api/businesses/search?location=boston&term=burrito+sushi+noodles`
      //   );
      //   console.log({ data });
      // } catch (e) {
      //   console.error('FilterList.js 에서 에러가 발생했습니다. ', e.message);
      // }
      // console.log(e.target.querySelector('span').textContent);
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

// FilterList.propTypes = {
//   type: oneOf(['checkbox', 'radio', 'price']).isRequired,
//   heading: string.isRequired,
//   options: arrayOf(array),
// };
