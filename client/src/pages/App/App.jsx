import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';

export function App() {
  return (
    <>
      <SearchForm hasShadow={true} locationWord={'New York'} />
      <Outlet />
    </>
  );
}

export default App;
