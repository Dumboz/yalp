import { string, arrayOf } from 'prop-types';
import { useRef } from 'react';
import { Selection } from 'components';
import { Wrapper, Heading, List, Button } from './FilterList.styled';
import axios from 'axios';
import { makeQuery } from 'utils';

export const FilterList = ({ type = 'checkbox', heading, options }) => {
  const listRef = useRef(null);
  //   const isOver = options.length > 4;
  //   isOver && options.splice(4);

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

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <List ref={listRef}>
        {options.map((item, key) => (
          <li key={key} tabIndex={'0'}>
            <Selection type={type} onClick={handleClick} group={heading}>
              {item}
            </Selection>
          </li>
        ))}
      </List>
      <Button>See all</Button>
    </Wrapper>
  );
};

FilterList.propTypes = {
  type: string,
  heading: string.isRequired,
  options: arrayOf(string),
};
