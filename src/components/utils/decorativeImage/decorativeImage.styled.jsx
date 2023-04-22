import styled from '@emotion/styled';
import image from '../../../images/decorativeImage.svg';

export const ImageContainerStyled = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 308px;
  height: 168px;
`;

export const ImageStyled = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${image});
  background-repeat: no-repeat;
`;
