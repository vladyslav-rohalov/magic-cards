import { ImageContainerStyled } from './decorativeImage.styled';
import BgImage from '../../../images/bg-image.png';

export default function DecorativeImage() {
  return (
    <ImageContainerStyled>
      <img src={BgImage} width={308} height={168} alt="" />
    </ImageContainerStyled>
  );
}
