import styled from '@emotion/styled';

export const UserListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 32px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  @media (max-width: 840px) {
    justify-content: center;
  }
`;
