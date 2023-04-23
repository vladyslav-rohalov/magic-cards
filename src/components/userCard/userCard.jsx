import { useState } from 'react';
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
}) {
  const [following, setFollowing] = useState(isFollowing);
  const [userFollowers, setUserFollowers] = useState(followers);

  const handleUserFollowing = () => {
    if (following) {
      setFollowing(false);
      setUserFollowers(userFollowers - 1);
    } else {
      setFollowing(true);
      setUserFollowers(userFollowers + 1);
    }
  };

  return (
    <ContainerStyled>
      <Logo />
      <DecorativeImage />
      <ProfileImage avatar={avatar} />
      <UserInfo tweets={tweets} followers={userFollowers} />
      <Button
        id={id}
        userFollowers={userFollowers}
        following={following}
        updateUser={handleUserFollowing}
      />
    </ContainerStyled>
  );
}
