import { Header } from 'layouts';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
