import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ContainerStyled } from './topButton.styled';

export default function TopButton() {
  const onTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ContainerStyled>
      <Fab onClick={onTopScroll} color="primary">
        <ArrowUpwardIcon sx={{}} />
      </Fab>
    </ContainerStyled>
  );
}
