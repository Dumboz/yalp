import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Wrapper, Button } from './FilterButton.styled';
import { Spinner, Icon, FilterModal, CommentList, Comment } from 'components';

const FONT_RATIO = 0.5;

export const FilterButton = ({ children, height = 22 }) => {
  const fontSize = height * FONT_RATIO;

  const handleClick = (e) => {
    const spinner = document.querySelector('.spinner');
    const button = document.querySelector('.button');
    spinner.classList.add('loading');

    setTimeout(() => {
      spinner.classList.remove('loading');
      button.classList.toggle('selected');
    }, 2000);
  };

  return (
    <Button
      className={'button'}
      onClick={handleClick}
      height={height}
      fontSize={fontSize}>
      {children}
      <Spinner className={'spinner'} height={height - 10} />
    </Button>
  );
};

FilterButton.DropDown = function FilterDropDown({ children, height = 22 }) {
  const fontSize = height * FONT_RATIO;
  const [selectionList, setSelectionList] = useState([
    { title: '', content: children },
  ]);

  const handleClick = (e) => {
    const modal = document.querySelector('.modal');
    const button = document.querySelector('.button');

    modal.classList.toggle('active');
    button.classList.toggle('expanded');
  };

  const changeChildren = (e) => {
    const title = e.target.getAttribute('aria-label');
    const content = e.target.lastElementChild.textContent;
    const FirstTitle = selectionList[0].title;

    if (FirstTitle === '') {
      setSelectionList([{ title, content }]);
    } else {
      const list = [...selectionList, { title, content }].sort((a, b) =>
        a.content > b.content ? 1 : a.content < b.content ? -1 : 0
      );
      setSelectionList(list);
    }
  };

  return (
    <Wrapper className="wrapper" height={height}>
      <Button
        className={'button'}
        onClick={handleClick}
        height={height}
        fontSize={fontSize}>
        <CommentList>
          {selectionList.map((item) => (
            <Comment title={item.title}>{item.content}</Comment>
          ))}
        </CommentList>
        <Icon type="dropdown" size={fontSize * 0.8} />
        <Spinner className="spinner" height={height - 10} />
      </Button>
      <FilterModal className="modal" changeChildren={changeChildren} />
    </Wrapper>
  );
};
