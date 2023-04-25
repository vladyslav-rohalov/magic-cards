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

const move2mobile = keyframes`
0% {
    top: 10px;
    left: 10px;
    rotate(0deg)
}    
25% {
    top: 0;
    left: 5%;
    transform: translate(-5%, 0)  rotate(360deg);
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
    left: 5%;
    transform: translate(-5%, 0) rotateX(360deg);
    }
100% {
    top: 10px;
    left: 10px;
    transform: rotate(0deg);
}
  `;

const move3mobile = keyframes`
0% {
    top: 20px;
    left: 20px;
    transform: rotate(0deg);
}
25% {
    top: 0;
    left: 10%;
    transform: translate(-10%, 0) rotate(180deg);
} 
75% {
    top: 0;
    left: 10%;
    transform: translate(-10%, 0);
}
100% {
    top: 20px;
    left: 20px;
}
  `;

const move4mobile = keyframes`
0% {
    top: 10px;
    left: 30px;
}
25% {
    top: 50px;
    left: 0;
}
75% {
    top: 50px;
    left: 0;
}
100% {
    top: 10px;
    left: 30px;
}
  `;

const move5mobile = keyframes`
0% {
    top: 0;
    left: 40px;
}
25% {
    top: 50px;
    left: 5%;
    transform: translate(-5%, 0);
}
75% {
    top: 50px;
    left: 5%;
    transform: translate(-5%, 0);
}
100% {
    top: 0;
    left: 40px;
}
  `;

const move6mobile = keyframes`
0% {
    top: 10px;
    left: 50px;
}
25% {
    top: 50px;
    left: 10%;
    transform: translate(-10%, 0);
}
75% {
    top: 50px;
    left: 10%;
    transform: translate(-10%, 0);
}
100% {
    top: 10px;
    left: 50px;
}
  `;

const move7mobile = keyframes`
0% {
    top: 20px;
    left: 60px;
}
25% {
    top: 100px;
    left: 0;
}
75% {
    top: 100px;
    left: 0;
}
100% {
    top: 20px;
    left: 60px;
}
  `;

const move8mobile = keyframes`
0% {
    top: 10px;
    left: 70px;
}
25% {
    top: 100px;
    left: 5%;
    transform: translate(-5%, 0);
}
75% {
    top: 100px;
    left: 50%;
    transform: translate(-5%, 0);
}
100% {
    top: 10px;
    left: 70px;
}
  `;

const move9mobile = keyframes`
0% {
    top: 0;
    left: 80px;
}
25% {
    top: 100px;
    left: 10%;
    transform: translate(-10%, 0);
}
75% {
    top: 100px;
    left: 10%;
    transform: translate(-10%, 0);
}
100% {
    top: 0;
    left: 80px;
}
  `;

export const ContainerStyled = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    display: block;
    max-width: 360px;
  }
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
  @media (max-width: 768px) {
    animation: ${move2mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move2} 10s 1 ease-in-out;
  }
`;

export const Container3 = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 768px) {
    animation: ${move3mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move3} 10s 1 ease-in-out;
  }
`;

export const Container4 = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  @media (max-width: 768px) {
    animation: ${move4mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move4} 10s 1 ease-in-out;
  }
`;

export const Container5 = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  @media (max-width: 768px) {
    animation: ${move5mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move5} 10s 1 ease-in-out;
  }
`;

export const Container6 = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  @media (max-width: 768px) {
    animation: ${move6mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move6} 10s 1 ease-in-out;
  }
`;

export const Container7 = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  @media (max-width: 768px) {
    animation: ${move7mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move7} 10s 1 ease-in-out;
  }
`;

export const Container8 = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  @media (max-width: 768px) {
    animation: ${move8mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move8} 10s 1 ease-in-out;
  }
`;

export const Container9 = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  @media (max-width: 768px) {
    animation: ${move9mobile} 10s 1 ease-in-out;
  }
  @media (min-width: 769px) {
    animation: ${move9} 10s 1 ease-in-out;
  }
`;
