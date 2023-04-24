import { NavContainer, LinkStyled } from './nafivation.styled';

export default function Navigation() {
  return (
    <NavContainer>
      <LinkStyled to="/home">HOME</LinkStyled>
      <LinkStyled to="/tweets">TWEETS</LinkStyled>
    </NavContainer>
  );
}
