import { updateUser } from 'utils/apiUsers';
import { ButtonStyled } from './button.styled';

export default function ButtonFollow({
  id,
  userFollowers,
  updateInterface,
  following,
}) {
  const color = () => {
    return following ? '#5CD3A8' : '#ebd8ff';
  };

  const handleButtonClick = () => {
    updateInterface();
    following
      ? updateUser(id, (userFollowers = userFollowers - 1), (following = false))
      : updateUser(id, (userFollowers = userFollowers + 1), (following = true));
  };

  return (
    <ButtonStyled type="button" onClick={handleButtonClick} color={color()}>
      {following ? 'Following' : 'Follow'}
    </ButtonStyled>
  );
}
