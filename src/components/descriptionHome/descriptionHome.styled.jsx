import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 120px;
  margin: 32px 0 32px 0;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin: 16px 0 16px 0;
    display: block;
  }
`;

export const TextStyled = styled.p`
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding: 16px;
    margin: 0;
  }
`;
