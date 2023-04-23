import { useState } from 'react';
import { updateUser } from 'utils/apiUsers';
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

  // это работает
  const handleUserFollowing = () => {
    if (following) {
      setFollowing(false);
      setUserFollowers(userFollowers - 1);
    } else {
      setFollowing(true);
      setUserFollowers(userFollowers + 1);
    }
  };

  //это не работало
  // const handleFollowing = async () => {
  //   if (following) {
  //     setFollowing(false);
  //     setUserFollowers(userFollowers - 1);
  //   } else {
  //     setFollowing(true);
  //     setUserFollowers(userFollowers + 1);
  //   }
  //   await updateUser(id, userFollowers, following);
  // };

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
        updateInterface={handleUserFollowing}
        // updateFollowing={handleFollowing}
      />
    </ContainerStyled>
  );
}
