import styled from 'styled-components';

const Wrap = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  line-height: 0;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: black;
  position: relative;
`;
const Username = styled.h1`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  text-align: center;
  align-items: center;
`;
const Location = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

export function UserInfo({ src, alt, location, userName, instar, icon2 }) {
  return (
    <>
      <Wrap>
        <Image src={src} alt={alt}></Image>
        <Username>{userName}</Username>
        <Location>{location}</Location>
        <Location>{instar + ' 0 . ' + icon2 + ' 0'}</Location>
      </Wrap>
    </>
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
