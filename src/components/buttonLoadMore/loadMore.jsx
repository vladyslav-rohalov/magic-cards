import Button from '@mui/material/Button';
import { ContainerStyled } from './loadMore.styled';

export default function LoadMore({ onLoadMore }) {
  return (
    <ContainerStyled>
      <Button
        variant="contained"
        color="primary"
        sx={{ fontFamily: 'Montserrat' }}
        onClick={onLoadMore}
      >
        Load more
      </Button>
    </ContainerStyled>
  );
}
