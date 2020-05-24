import styled from 'styled-components';
import '../../App.scss';

export const ContactWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
  }
`;
export const ContactContent = styled.div`
  width: 60%;

  img {
    width: 200px;
    height: 300px;
    margin: 0 auto;
    transition: all 0.5s linear;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    img {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
  }
`;

export const ContactBox = styled.div`
  width: 70%;
  transform: translateY(500px);
  animation: slideUp 0.8s ease-in-out forwards 1s;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContactCard = styled.div`
  width: 300px;
  height: 450px;
  margin: 1rem auto 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slideIn 1.5s ease-in-out forwards;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#E4E4E4' : '#363537'};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};

  @media only screen and (max-width: 763px) {
    margin: 1rem auto 1rem;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    margin: 2rem auto;
  }
`;
