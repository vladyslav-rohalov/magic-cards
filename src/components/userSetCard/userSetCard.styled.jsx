import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const move2 = keyframes`
0% {
    top: 10px;
    left: 10px;
    rotate(0deg)
}    
25% {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0)  rotate(360deg);
}
40% {
    scale: 1;
}
50% {
    scale: 1.05;
}
60% {
    scale: 1;
}
75% {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0) rotateX(360deg);
    }
100% {
    top: 10px;
    left: 10px;
    transform: rotate(0deg);
}
  `;

const move3 = keyframes`
0% {
    top: 20px;
    left: 20px;
    transform: rotate(0deg);
}
25% {
    top: 0;
    left: 100%;
    transform: translate(-100%, 0) rotate(180deg);
} 
75% {
    top: 0;
    left: 100%;
    transform: translate(-100%, 0);
}
100% {
    top: 20px;
    left: 20px;
}
  `;

const move4 = keyframes`
0% {
    top: 10px;
    left: 30px;
}
25% {
    top: 500px;
    left: 0;
}
75% {
    top: 500px;
    left: 0;
}
100% {
    top: 10px;
    left: 30px;
}
  `;

const move5 = keyframes`
0% {
    top: 0;
    left: 40px;
}
25% {
    top: 500px;
    left: 50%;
    transform: translate(-50%, 0);
}
75% {
    top: 500px;
    left: 50%;
    transform: translate(-50%, 0);
}
100% {
    top: 0;
    left: 40px;
}
  `;

const move6 = keyframes`
0% {
    top: 10px;
    left: 50px;
}
25% {
    top: 500px;
    left: 100%;
    transform: translate(-100%, 0);
}
75% {
    top: 500px;
    left: 100%;
    transform: translate(-100%, 0);
}
100% {
    top: 10px;
    left: 50px;
}
  `;

const move7 = keyframes`
0% {
    top: 20px;
    left: 60px;
}
25% {
    top: 1000px;
    left: 0;
}
75% {
    top: 1000px;
    left: 0;
}
100% {
    top: 20px;
    left: 60px;
}
  `;

const move8 = keyframes`
0% {
    top: 10px;
    left: 70px;
}
25% {
    top: 1000px;
    left: 50%;
    transform: translate(-50%, 0);
}
75% {
    top: 1000px;
    left: 50%;
    transform: translate(-50%, 0);
}
100% {
    top: 10px;
    left: 70px;
}
  `;

const move9 = keyframes`
0% {
    top: 0;
    left: 80px;
}
25% {
    top: 1000px;
    left: 100%;
    transform: translate(-100%, 0);
}
75% {
    top: 1000px;
    left: 100%;
    transform: translate(-100%, 0);
}
100% {
    top: 0;
    left: 80px;
}
  `;

export const ContainerStyled = styled.div`
  position: relative;
  display: flex;
`;

export const Container1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container2 = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  animation: ${move2} 10s 1 ease-in-out;
`;

export const Container3 = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move3} 10s 1 ease-in-out;
`;

export const Container4 = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  animation: ${move4} 10s 1 ease-in-out;
`;

export const Container5 = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  animation: ${move5} 10s 1 ease-in-out;
`;

export const Container6 = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  animation: ${move6} 10s 1 ease-in-out;
`;

export const Container7 = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  animation: ${move7} 10s 1 ease-in-out;
`;

export const Container8 = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  animation: ${move8} 10s 1 ease-in-out;
`;

export const Container9 = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  animation: ${move9} 10s 1 ease-in-out;
`;
