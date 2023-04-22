import { useState } from 'react';
import { ButtonStyled } from './button.styled';

export default function ButtonFollow() {
  const [buttonState, setButtonstate] = useState(false);

  const color = () => {
    return buttonState ? '#5CD3A8' : '#ebd8ff';
  };

  return (
    <ButtonStyled
      type="button"
      onClick={() => {
        setButtonstate(!buttonState);
      }}
      color={color()}
    >
      {buttonState ? 'Following' : 'Follow'}
    </ButtonStyled>
  );
}
