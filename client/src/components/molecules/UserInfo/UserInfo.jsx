import { memo } from 'react';
import { Wrap, Image, Username, Location } from './UserInfo.styled';

function UserInfo({ src, alt, location, userName, instar, icon2 }) {
  return (
    <Wrap>
      <Image src={src} alt={alt}></Image>
      <Username>{userName}</Username>
      <Location>{location}</Location>
      <Location>{instar + ' 0 . ' + icon2 + ' 0'}</Location>
    </Wrap>
  );
}
UserInfo.defaultProps = {
  src: '/#',
  alt: 'profile',
  location: 'Location',
  userName: 'Username',
  instar: 'Icon',
  icon2: 'Icon',
};

export default memo(UserInfo);
