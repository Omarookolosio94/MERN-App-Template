import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 80vh;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 763px) {
    width: 100%;
  }
`;

export const ErrorMsg = styled.div`
  text-align: center;

  h1 {
    font-size: 100px;
    color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  }
`;

export const Cartoon = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  .headChar {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#E4E4E4' : '#363537'};
    border-radius: 50%;
    position: relative;
    left: 35px;
    top: 20px;
    animation: headChange 1s infinite 1.6s ease-in;
  }

  .bodyChar {
    width: 40px;
    height: 100px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#E4E4E4' : '#363537'};
    border-radius: 60px 10px 0 0;
    animation: bodyChange 1s infinite 1.6s ease-in;
  }

  .firstLeg,
  .secondLeg {
    width: 35px;
    height: 10px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#E4E4E4' : '#363537'};
    border-radius: 20px 50px 50px 20px;
    position: relative;
    left: 20px;
    animation: walk 2s infinite linear;
  }

  .firstLeg {
    top: 55px;
  }

  .secondLeg {
    top: 25px;
    animation-delay: 1s;
  }

  .shadowChar {
    width: 100px;
    height: 10px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'rgba(228, 228, 228, 0.24)' : 'rgba(0, 0, 0, 0.12)'};
    /* background-color: rgba(197, 82, 82, 0.2); */
    border-radius: 50%;
    animation: shadowChange 1s infinite 1.6s linear;
  }

  @keyframes headChange {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(7px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes bodyChange {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes shadowChange {
    0% {
      width: 100px;
    }
    50% {
      width: 110px;
    }
    100% {
      width: 100px;
    }
  }

  @keyframes walk {
    0% {
      transform: translateX(0px) rotate(0deg);
    }
    20% {
      transform: translateX(-20px) rotate(0deg);
    }
    40% {
      transform: translate(-40px, 0px) rotate(0deg);
    }
    60% {
      transform: translate(-30px, -10px) rotate(35deg);
    }
    90% {
      transform: translate(10px, -7px) rotate(-35deg);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
