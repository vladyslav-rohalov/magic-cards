// import { useState } from 'react';
import { ContainerStyled } from './userCard.styled';
import {
  Logo,
  DecorativeImage,
  ProfileImage,
  UserInfo,
  Button,
} from 'components/utils';

export default function UserCard({ tweets, followers, avatar }) {
  return (
    <ContainerStyled>
      <Logo />
      <DecorativeImage />
      <ProfileImage avatar={avatar} />
      <UserInfo tweets={tweets} followers={followers} />
      <Button />
    </ContainerStyled>
  );
}
