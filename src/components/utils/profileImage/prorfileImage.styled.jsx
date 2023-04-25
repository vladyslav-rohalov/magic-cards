import styled from '@emotion/styled';

export const LineStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CircleStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 178px;
  transform: translate(-50%, 0);
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarStyled = styled.img`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translate(-50%, 0);
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
