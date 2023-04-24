import { ContainerStyled } from './userTemplateCard.styled';
import {
  Logo,
  DecorativeImage,
  ProfileImage,
  UserInfo,
  ButtonDecorative,
} from 'components/utils';
import userTemplateImage from '../../images/Hansel.png';

export default function UserTemplateCard(s) {
  return (
    <ContainerStyled>
      <Logo />
      <DecorativeImage />
      <ProfileImage avatar={userTemplateImage} />
      <UserInfo name={'Vladyslav Rohalov'} tweets={777} followers={100500} />
      <ButtonDecorative />
    </ContainerStyled>
  );
}
