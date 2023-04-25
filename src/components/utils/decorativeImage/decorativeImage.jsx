import { ImageContainerStyled } from './decorativeImage.styled';
import BgImage from '../../../images/bg-image.png';

export default function DecorativeImage() {
  return (
    <ImageContainerStyled>
      <img src={BgImage} alt="" width={'100%'} height={'auto'} />
    </ImageContainerStyled>
  );
}
