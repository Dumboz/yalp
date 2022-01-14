import { DetailMenuCard } from 'components/DetailMenuCard/DetailMenuCard';
import './App.css';
import { InitSVG, Icon, Comment } from 'components';
import { CommentList } from 'components/CommentList/CommentList';
import { PriceFilterButton } from 'components/PriceFilterButton/PriceFilterButton';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Tags } from 'components/Tags/Tags';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';

export function App() {
  return (
    <>
      <div className='App'>Yalp!</div>
      {/* <PriceFilterButton />
      <DetailMenuCard /> */}
      <UserInfo />

      {/* <Icon type="calendar" size={100} /> */}
      {/* <Comment title="안녕" iconType="calendar" size={32}>
        I dream about this place. And I'm a very picky pizza eater. Super saucy,
        fresh, thick, perfectly greasy, hot, yum, yum. Plus the employees are
        totally great and looking out for the hihihihihihihihihihihihi
      </Comment> */}

      <CommentList>
        <Comment title='안녕' iconType='calendar' size={32}>
          I'm calendar
        </Comment>
        <Comment title='불' iconType='fire' size={32}>
          I'm fire
        </Comment>
        <Comment title='저장' iconType='save' size={32}>
          I'm save
        </Comment>
      </CommentList>

      {/* 한 번이상 렌더링 되지 않는 로직 작성하기 */}
      <InitSVG />
      <ArrowButton size={24} type='leftarrow' isDisabled={true} />
      <Tags fontSize={24}>안녕하세요</Tags>
      <PriceFilterButton />
      <DetailMenuCard />
    </>
  );
}

export default App;
