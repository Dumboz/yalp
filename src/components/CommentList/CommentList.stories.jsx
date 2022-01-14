import { Comment } from 'components/Comment/Comment';
import { CommentList } from './CommentList';
import { InitSVG } from 'components/InitSVG/InitSVG';

export default {
  title: 'CommentList',
  component: CommentList,
};

const Template = (args) => (
  <>
    <CommentList {...args} />
    <InitSVG />
  </>
);

export const Defualt = Template.bind({});
Defualt.args = {
  children: [
    <Comment iconType="calendar" title="캘린더" size={32}>
      Hello1
    </Comment>,
    <Comment iconType="fire" title="불" size={32}>
      Hello2
    </Comment>,
    <Comment title="아이콘 없음" size={32}>
      Hello3
    </Comment>,
  ],
};
