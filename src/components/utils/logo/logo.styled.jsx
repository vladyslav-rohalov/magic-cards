import styled from '@emotion/styled';
import logo from '../../../images/logo.svg';

export const LogoContainerStyled = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const LogoStyled = styled.div`
  width: 76px;
  height: 22px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
