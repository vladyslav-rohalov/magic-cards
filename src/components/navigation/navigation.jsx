import { NavContainer, LinkStyled } from './nafivation.styled';

export default function Navigation() {
  return (
    <NavContainer>
      <LinkStyled
        to="/"
        style={({ isActive }) => ({
          borderBottom: isActive ? '1px solid white' : 'none',
        })}
      >
        HOME
      </LinkStyled>
      <LinkStyled
        to="/tweets"
        style={({ isActive }) => ({
          borderBottom: isActive ? '1px solid white' : 'none',
        })}
      >
        TWEETS
      </LinkStyled>
    </NavContainer>
  );
}
