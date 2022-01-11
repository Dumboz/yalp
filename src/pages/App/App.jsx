import { DetailMenuCard } from 'components/DetailMenuCard/DetailMenuCard';
import './App.css';
import { PriceFilterButton } from 'components/PriceFilterButton/PriceFilterButton';
import { UserInfo } from 'components/UserInfo/UserInfo';

export function App() {
  return (
    <>
      <div className='App'>Yalp!</div>
      {/* <PriceFilterButton />
      <DetailMenuCard /> */}
      <UserInfo />
    </>
  );
}

export default App;
