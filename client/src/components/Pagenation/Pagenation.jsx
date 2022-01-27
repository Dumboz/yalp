import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import {
  Ul,
  Li,
  PagelistWrapper,
  PagenationWrapper,
  Text,
} from './Pagenation.styled';
import { useGetBusinessesQuery } from 'services/businesses';
import { createPageList } from 'utils';
const queryString = require('query-string');

function Pagenation() {
  const { pathname, search } = useLocation();
  const {
    data: { total },
  } = useGetBusinessesQuery(search);
  const [_, setSearchParams] = useSearchParams({});
  const query = queryString.parse(search);
  const { offset } = query;
  const lastPage = Math.ceil(+total / 10);
  const currentPage = (+offset || 0) + 1;
  const pageList = [createPageList({ currentPage, lastPage })];

  const onClick = useCallback(
    direct => {
      setSearchParams({
        ...query,
        offset: direct === 'right' ? +offset + 1 : +offset - 1,
      });
    },
    [offset, query, setSearchParams],
  );

  const leftClick = useCallback(() => {
    onClick('left');
  }, [onClick]);

  const rightClick = useCallback(() => {
    onClick('right');
  }, [onClick]);

  return (
    <PagenationWrapper>
      <PagelistWrapper>
        <ArrowButton
          direct="left"
          disabled={pageList.includes(1)}
          onClick={leftClick}
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
          disabled={pageList.includes(lastPage) || lastPage === 0}
          onClick={rightClick}
        />
      </PagelistWrapper>
      <Text>{`${currentPage} of ${lastPage}`}</Text>
    </PagenationWrapper>
  );
}

export default Pagenation;
