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
  // onFollow,
  // isFollowing,
}) {
  return (
    <ContainerStyled>
      <Logo />
      <DecorativeImage />
      <ProfileImage avatar={avatar} />
      <UserInfo tweets={tweets} followers={followers} />
      <Button
        id={id}
        followers={followers}
        // onFollow={onFollow}
        // isFollowing={isFollowing}
      />
    </ContainerStyled>
  );
}
