import { ContainerStyled } from './userCard.styled';
import {
  Logo,
  DecorativeImage,
  ProfileImage,
  UserInfo,
  Button,
} from 'components/utils';

export default function UserCard({
  tweets,
  followers,
  avatar,
  id,
  isFollowing,
  user,
  onClick,
}) {
  return (
    <ContainerStyled>
      <Logo />
      <DecorativeImage />
      <ProfileImage avatar={avatar} />
      <UserInfo name={user} tweets={tweets} followers={followers} />
      <Button id={id} isFollowing={isFollowing} onClick={onClick} />
    </ContainerStyled>
  );
}
