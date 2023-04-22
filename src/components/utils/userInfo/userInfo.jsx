import { ContainerStyled, TextStyled } from './userInfo.styled';

export default function UserInfo({ tweets, followers }) {
  const followersRegExp = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <ContainerStyled>
      <TextStyled> {tweets} tweets</TextStyled>
      <TextStyled>{followersRegExp} Followers</TextStyled>
    </ContainerStyled>
  );
}
