import Header from 'components/Header/Header';
import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import Pagenation from 'components/Pagenation/Pagenation';
import SearchForm from 'components/SearchForm/SearchForm';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      {/* <SearchForm showLabel={true} hasShadow={true} locationWord="New York" /> */}
      <Header
        searchWord={`tacos, Cheap Dinner, Max's`}
        locationWord="New York"
      />
      <Pagenation />
      <Outlet />
    </>
  );
}

export default App;
