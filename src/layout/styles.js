import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: white;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  & h1 {
    padding: 15px;
    margin: 0 0 0.05em 0;
    font-family: 'Cabin', sans-serif;
    font-weight: 300;
    // background-color: black;
    font-size: min(9vw, 7em);
    line-height: 1em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`;

// export const BottomLeft = styled.div`
//   position: absolute;
//   bottom: 5vw;
//   left: 5vw;
//   width: 30ch;
//   max-width: 40%;
// `;

// export const BottomRight = styled.div`
//   position: absolute;
//   bottom: 5vw;
//   right: 5vw;
//   width: 35ch;
//   max-width: 40%;
//   line-height: 1em;
//   letter-spacing: -0.01em;
//   text-align: right;
// `;

// export const Hamburger = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   top: 5vw;
//   right: 5vw;
//   & > div {
//     position: relative;
//     width: 24px;
//     height: 2px;
//     background: #252525;
//     margin-bottom: 6px;
//   }
// `;

export const Slider = styled.div`
  position: absolute;
  display: flex;
  width: 90vw;
  bottom: 10%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  // letter-spacing: -0.01em;
  font-size: 1.5rem;
  // transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`;
