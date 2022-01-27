import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from 'components';

export function App() {
  return (
    <>
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
