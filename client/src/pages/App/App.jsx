import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { FilterList } from 'components/FilterList/FilterList';

export function App() {
  return (
    <>
      <SearchForm hasShadow={true} locationWord={'New York'} />
      {/* <FilterList
        heading={'Features'}
        options={['option1', 'option2', 'option3', 'option4']}
      /> */}
      <Outlet />
    </>
  );
}

export default App;
