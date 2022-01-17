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

export const Default = Template.bind({});
Default.args = {
  size: 32,
  children: [
    <Comment key="캘린더" iconType="calendar" title="캘린더">
      Hello1
    </Comment>,
    <Comment key="아이콘 없음" title="아이콘 없음">
      Hello2
    </Comment>,
    <Comment key="불" iconType="fire" title="불">
      Hello3
    </Comment>,
  ],
};
