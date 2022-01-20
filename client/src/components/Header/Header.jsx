import { Logo } from 'components/Logo/Logo';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

const HeaderWrapper = React.memo(styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  padding-left: 150px;
  background-color: ${getHexaColor('white')};
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`);

function Header({ searchWord, locationWord }) {
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
