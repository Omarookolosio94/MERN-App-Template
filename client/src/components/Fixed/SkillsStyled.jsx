import styled from 'styled-components';

export const SKillsWrapper = styled.div`
  color: ${({ theme }) => (theme === 'dark' ? '#E4E4E4' : '#363537')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: auto;
  margin: 1rem auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentBox = styled.div`
  height: 90%;
  width: 40%;
  transform: translateY(600px);
  animation: slideUp 0.7s ease-in-out forwards 0.7s;

  .details {
    margin: 3rem 0;
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;

    .details {
      margin: 2rem 0 3rem;
      width: 60%;
    }
  }

  @media only screen and (max-width: 600px) {
    .details {
      width: 100%;
    }
  }
`;

export const SkillBox = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 400px) {
    width: 96%;
  }
  @media only screen and (max-width: 300px) {
    width: 100%;
  }
`;

export const SKill = styled.div`
  padding: 1rem 0.5rem;
  height: 180px;
  width: 150px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transform: translateY(600px);
  animation: slideUp 0.7s ease-in-out forwards 0.7s;
  background: ${({ theme }) => (theme === 'light' ? '#e4e4e4' : '#363537')};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? ' 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
      : ' 0 1px 3px rgba(228, 228, 228, 0.24), 0 1px 2px rgba(228, 228, 228, 0.24);'};

  .logo i {
    font-size: 2rem;
  }

  .detail i.full {
    color: gold;
    font-weight: 600;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    height: 160px;
    width: 130px;

    .logo i {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 400px) {
    height: 140px;
    width: 110px;
    padding: 1rem 0.3rem;

    .logo i {
      font-size: 1rem;
    }
  }
`;
