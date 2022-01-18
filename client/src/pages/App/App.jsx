import { Icon } from 'components/Icon/Icon';
import { InitSVG } from 'components/InitSVG/InitSVG';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      <Icon type="fire" size={30} />
      <Outlet />
    </>
  );
}

export default App;
