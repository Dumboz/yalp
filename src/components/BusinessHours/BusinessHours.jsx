import { TimeInfoList, TimeInfoItem } from './BusinessHours.styled';
import { makeTimeEn } from 'utils';

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

export function BusinessHours({ openTimeList, isOpenNow }) {
  const Today = new Date().getDay();
  const openState = isOpenNow ? 'Open' : 'Closed';

  return (
    <TimeInfoList>
      {openTimeList.map(({ start, end, day }) => (
        <TimeInfoItem key={Week[day]} fontWeight={Today === day ? 700 : 600}>
          <span>{Week[day]}</span>
          <span>{makeTimeEn(start) + ' - ' + makeTimeEn(end)}</span>
          {Today === day && <span data-open={openState}>{openState} now</span>}
        </TimeInfoItem>
      ))}
    </TimeInfoList>
  );
}
