import Button from '@mui/material/Button';
import { ContainerStyled } from './loadMore.styled';

export default function LoadMore({ onLoadMore }) {
  return (
    <ContainerStyled>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontFamily: 'Montserrat',
          width: '196px',
          height: '50px',
          borderRadius: '10.3108px',
          fontWeight: '600',
          fontSize: '18px',
        }}
        onClick={onLoadMore}
      >
        Load more
      </Button>
    </ContainerStyled>
  );
}
