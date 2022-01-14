import { DetailMenuCard } from 'components/DetailMenuCard/DetailMenuCard';
import './App.css';
import { InitSVG, Icon, Comment } from 'components';
import { CommentList } from 'components/CommentList/CommentList';
import { PriceFilterButton } from 'components/PriceFilterButton/PriceFilterButton';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Tags } from 'components/Tags/Tags';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import { PriceFilterButtonGroup } from 'components/PriceFilterButton/PriceFilterButtonGroup';

export function App() {
  return (
    <>
      <div className='App'>Yalp!</div>
      {/* 한 번이상 렌더링 되지 않는 로직 작성하기 */}
      <PriceFilterButton isSelect={false}>111111</PriceFilterButton>
      <PriceFilterButtonGroup />
      <InitSVG />
      <ArrowButton size={24} type='leftarrow' isDisabled={true} />
      <Tags size={16}>안녕하세요</Tags>
    </>
  );
}

export default App;
