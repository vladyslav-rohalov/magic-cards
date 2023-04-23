import { ButtonStyled } from './button.styled';
import axios from 'axios';

export default function ButtonFollow({
  id,
  userFollowers,
  updateUser,
  following,
}) {
  const color = () => {
    return following ? '#5CD3A8' : '#ebd8ff';
  };

  const handleButtonClick = () => {
    updateUser();
    if (following) {
      axios
        .put(`users/${id}`, {
          followers: userFollowers - 1,
          isFollowing: false,
        })
        .then()
        .catch(function (error) {
          throw new Error(error);
        });
    } else {
      axios
        .put(`users/${id}`, { followers: userFollowers + 1, isFollowing: true })
        .then()
        .catch(function (error) {
          throw new Error(error);
        });
    }
  };

  return (
    <ButtonStyled type="button" onClick={handleButtonClick} color={color()}>
      {following ? 'Following' : 'Follow'}
    </ButtonStyled>
  );
}
