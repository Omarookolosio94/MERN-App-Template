import styled from 'styled-components';

export const SpinBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerBounce = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  .sk-bounce-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#E4E4E4' : '#363537'};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-bounce 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  .sk-bounce-dot:nth-child(2) {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    45%,
    55% {
      transform: scale(1);
    }
  }
`;
