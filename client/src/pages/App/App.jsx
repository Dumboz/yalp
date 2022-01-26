import Header from 'components/Header/Header';
import Pagenation from 'components/Pagenation/Pagenation';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { ScrollToTop } from 'components';

export function App() {
  return (
    <>
      {/* <SearchForm showLabel={true} hasShadow={true} locationWord="New York" /> */}
      <ScrollToTop />
      <Header
        searchWord={`tacos, Cheap Dinner, Max's`}
        locationWord="New York"
      />
      <Outlet />
    </>
  );
}

export default App;
