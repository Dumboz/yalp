import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import SearchForm from 'components/SearchForm/SearchForm';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <SearchForm showLabel={true} hasShadow={true} locationWord="New York" />
      <Outlet />
    </>
  );
}

export default App;
