import { LineStyled, CircleStyled, AvatarStyled } from './prorfileImage.styled';

export default function ProfileImage({ avatar }) {
  return (
    <>
      <LineStyled />
      <CircleStyled>
        <AvatarStyled src={avatar} alt="user photo" />
      </CircleStyled>
    </>
  );
}
