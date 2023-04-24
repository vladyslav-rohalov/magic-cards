import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 600;
  font-size: 24px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 32px;
`;
