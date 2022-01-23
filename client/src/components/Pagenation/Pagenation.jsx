import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import {
  Ul,
  Li,
  PagelistWrapper,
  PagenationWrapper,
  Text,
} from './Pagenation.styled';
const queryString = require('query-string');

function Pagenation() {
  const { total } = useSelector(({ businessesReducer }) => businessesReducer);
  const { pathname, search } = useLocation();
  const [_, setSearchParams] = useSearchParams({});
  const query = queryString.parse(search);
  const { offset } = query;
  const lastPage = Math.ceil(+total / 20);
  const currentPage = (+offset || 0) + 1;
  const pageList = [currentPage];

  const onClick = useCallback(
    direct => {
      setSearchParams({
        ...query,
        offset: direct === 'right' ? +offset + 1 : +offset - 1,
      });
    },
    [offset, query, setSearchParams],
  );

  let i = 1;
  while (pageList.length < 9) {
    if (currentPage + i <= lastPage) pageList.push(currentPage + i);
    if (pageList.length === lastPage) break;
    if (currentPage - i > 0) pageList.unshift(currentPage - i);
    if (pageList.length === lastPage) break;
    i++;
  }

  return (
    <PagenationWrapper>
      <PagelistWrapper>
        <ArrowButton
          direct="left"
          disabled={pageList.includes(1)}
          onClick={() => onClick('left')}
        />
        <Ul>
          {pageList.map(page => {
            query.offset = page - 1;
            return (
              <Li key={page} isCurrent={page === currentPage}>
                <Link to={`${pathname}?${queryString.stringify(query)}`}>
                  {page}
                </Link>
              </Li>
            );
          })}
        </Ul>
        <ArrowButton
          direct="right"
          disabled={pageList.includes(lastPage)}
          onClick={() => onClick('right')}
        />
      </PagelistWrapper>
      <Text>{`${currentPage} of ${lastPage}`}</Text>
    </PagenationWrapper>
  );
}

export default React.memo(Pagenation);
