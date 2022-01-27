import { Logo } from 'components/Logo/Logo';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

const HeaderWrapper = React.memo(styled.div`
  width: 100%;
  height: 130px;
  padding: 16px;
  padding-left: 150px;
  background-color: ${getHexaColor('white')};
  position: sticky;
  z-index: 1000;
  top: 0;
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`);

function Header({
  searchWord = `tacos, Cheap Dinner, Max's`,
  locationWord = 'New York',
}) {
  return (
    <HeaderWrapper>
      <Logo size={100} />
      <SearchForm
        hasShadow={true}
        searchWord={searchWord}
        locationWord={locationWord}
      />
    </HeaderWrapper>
  );
}

export default React.memo(Header);
