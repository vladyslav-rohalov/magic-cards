import { useState, useEffect } from 'react';
import { ButtonStyled } from './button.styled';
import axios from 'axios';

export default function ButtonFollow({ id, followers }) {
  const [isFollowing, setISFollowing] = useState(false);

  const color = () => {
    return isFollowing ? '#5CD3A8' : '#ebd8ff';
  };

  const handleButtonClick = () => {
    // onFollow(!isFollowing);
    setISFollowing(!isFollowing);
    isFollowing
      ? axios
          .put(`users/${id}`, { followers: followers - 1 })
          .then(response => console.log(response.data.followers))
          .catch(function (error) {
            throw new Error(error);
          })
      : axios
          .put(`users/${id}`, { followers: followers + 1 })
          .then(response => console.log(response.data.followers))
          .catch(function (error) {
            throw new Error(error);
          });
  };

  useEffect(() => {}, []);

  return (
    <ButtonStyled type="button" onClick={handleButtonClick} color={color()}>
      {isFollowing ? 'Following' : 'Follow'}
    </ButtonStyled>
  );
}
