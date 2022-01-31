import { Comment } from 'components/atoms/Comment/Comment';
import { CommentList } from './CommentList';
import { InitSVG } from 'components/templates/InitSVG/InitSVG';

export default {
  title: 'CommentList',
  component: CommentList,
  argTypes: {
    color: {
      control: 'color',
    },
  },
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
    <Comment iconType="calendar" title="캘린더">
      Hello1
    </Comment>,
    <Comment title="아이콘 없음">Hello2</Comment>,
    <Comment iconType="fire" title="불">
      Hello3
    </Comment>,
  ],
};
