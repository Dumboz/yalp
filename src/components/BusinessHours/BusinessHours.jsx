import { TimeInfoList } from './BusinessHours.styled';
import { TimeInfoItem } from './BusinessHours.styled';

const Mock = {
  hours: [
    {
      open: [
        {
          is_overnight: false,
          start: '1000',
          end: '2300',
          day: 0,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2300',
          day: 1,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2300',
          day: 2,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2300',
          day: 3,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2330',
          day: 4,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2330',
          day: 5,
        },
        {
          is_overnight: false,
          start: '1000',
          end: '2300',
          day: 6,
        },
      ],
      hours_type: 'REGULAR',
      is_open_now: false,
    },
  ],
};

const Week = ['Sun', 'Mon', 'The', 'Wed', 'Thu', 'Fri', 'Sat'];

const makeTime = (time) => {
  const noonType = +time > 1200 ? 'PM' : 'AM';
  let realTime = +time > 1200 ? '' + (+time - 1200) : time;

  return realTime.replace(/^../i, (e) => e + ':') + ' ' + noonType;
};

export function BusinessHours({ openTimeList, isOpenNow }) {
  const Today = new Date().getDay();
  const openState = isOpenNow ? 'Open' : 'Closed';

  return (
    <TimeInfoList>
      {openTimeList.map(({ start, end, day }) => (
        <TimeInfoItem key={Week[day]} fontWeight={Today === day ? 700 : 600}>
          <span>{Week[day]}</span>
          <span>{makeTime(start) + ' - ' + makeTime(end)}</span>
          {Today === day && <span data-open={openState}>{openState} now</span>}
        </TimeInfoItem>
      ))}
    </TimeInfoList>
  );
}
