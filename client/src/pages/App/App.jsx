import Header from 'components/Header/Header';
import Pagenation from 'components/Pagenation/Pagenation';
import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { ScrollToTop } from 'components';

export function App() {
  const { pathname } = useLocation();

  // if (pathname) {
  //   return (
  //     <Navigate to="/search?term=restaurant&location=New%20York&offset=0&radius=800&limit=10" />
  //   );
  // }

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
