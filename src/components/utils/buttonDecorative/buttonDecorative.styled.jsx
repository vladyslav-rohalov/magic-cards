import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rectangle = keyframes`
0% {
  width: 186px;
  height: 40px;
  opacity: 1;
}
100% {
  width: 206px;
  height: 60px;
  opacity: 0;
}
  `;

export const ButtonStyled = styled.button`
  position: absolute;
  left: 50%;
  top: 390px;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  &:hover::before {
    animation: ${rectangle} 1s infinite;
  }
`;
