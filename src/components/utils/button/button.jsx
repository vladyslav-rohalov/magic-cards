import { ButtonStyled } from './button.styled';

export default function ButtonFollow({ id, isFollowing, onClick }) {
  const color = () => {
    return isFollowing ? '#5CD3A8' : '#ebd8ff';
  };

  return (
    <ButtonStyled type="button" onClick={() => onClick(id)} color={color()}>
      {isFollowing ? 'Following' : 'Follow'}
    </ButtonStyled>
  );
}
