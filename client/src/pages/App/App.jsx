import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import SearchForm from 'components/SearchForm/SearchForm';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { FilterList } from 'components/FilterList/FilterList';

export function App() {
  return (
    <>
<<<<<<< HEAD
      <SearchForm hasShadow={true} locationWord={'New York'} />
      {/* <FilterList
        heading={'Features'}
        options={['option1', 'option2', 'option3', 'option4']}
      /> */}
=======
      <SearchForm showLabel={true} hasShadow={true} locationWord="New York" />
>>>>>>> 9f1573676ded529ba2439ea2db9cc1f75ea3cf46
      <Outlet />
    </>
  );
}

export default App;
