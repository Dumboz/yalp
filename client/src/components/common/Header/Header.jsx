import { Logo, SearchForm } from 'components';
import { memo } from 'react';
import { HeaderWrapper } from './Header.styled';

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

export default memo(Header);
