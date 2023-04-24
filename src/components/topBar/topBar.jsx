import Filter from 'components/filter/filter';
import BackButton from 'components/backButton/backButton';
import { ContainerStyled } from './topBar.styled';

export default function TopBar({ onFilterChange }) {
  return (
    <ContainerStyled>
      <BackButton />
      <Filter onFilterChange={onFilterChange} />
    </ContainerStyled>
  );
}
